"use client";

import React, { useState, useEffect } from 'react';
import NavbarLogo from './NavbarLogo';
import NavbarLinks from './NavbarLinks';
import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';

const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch('/api/auth/status');
                if (response.ok) {
                    const userData = await response.json();
                    setIsLoggedIn(true);
                    setUser(userData);
                } else {
                    setIsLoggedIn(false);
                }
            } catch (error) {
                setIsLoggedIn(false);
            }
        };
        checkAuthStatus();
    }, []);

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            setIsLoggedIn(false);
            setUser(null);
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-[#e8e8ff] bg-white/95 shadow-[0_10px_35px_rgba(49,70,196,0.08)] backdrop-blur">
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
