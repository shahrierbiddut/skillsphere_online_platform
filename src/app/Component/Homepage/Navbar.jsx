"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import LoggedOutNav from "./LoggedOutNav";
import LoggedInNav from "./LoggedInNav";
import { useToast } from "../../components/toast/ToastProvider";

const Navbar = () => {
    const pathname = usePathname();
    const { showToast } = useToast();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        let isMounted = true;

        const checkAuthStatus = async () => {
            try {
                const response = await fetch("/api/auth/status", {
                    cache: "no-store"
                });
                const userData = await response.json();

                if (!isMounted) {
                    return;
                }

                if (response.ok && userData.authenticated) {
                    setIsLoggedIn(true);
                    setUser(userData.user);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } catch {
                if (!isMounted) {
                    return;
                }

                setIsLoggedIn(false);
                setUser(null);
            }
        };
        checkAuthStatus();

        return () => {
            isMounted = false;
        };
    }, [pathname]);

    const handleLogout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" });
            setIsLoggedIn(false);
            setUser(null);
            showToast({
                type: "success",
                title: "Logged out",
                message: "You have been signed out successfully."
            });
        } catch (error) {
            console.error("Logout error:", error);
            showToast({
                type: "error",
                title: "Logout failed",
                message: "Please try again."
            });
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#e6ebff] bg-white/95 shadow-[0_10px_35px_rgba(19,34,86,0.06)] backdrop-blur">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-8">
                <NavbarLogo />
                <NavbarLinks />
                {isLoggedIn ? (
                    <LoggedInNav 
                        userAvatar={user?.avatar} 
                        userName={user?.name}
                        onLogout={handleLogout}
                    />
                ) : (
                    <LoggedOutNav />
                )}
            </div>
        </header>
    );
};

export default Navbar;
