"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarLinks = () => {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/profile", label: "My Profile" }
  ];

  return (
    <nav className="flex flex-1 flex-wrap items-center justify-center gap-6 md:gap-8">
      {links.map(({ href, label }) => {
        const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={href}
            href={href}
            aria-current={isActive ? "page" : undefined}
            className={`relative px-1 py-2 text-sm font-semibold transition-colors duration-200 md:text-[15px] ${
              isActive ? "text-[#3454f5]" : "text-slate-600 hover:text-[#3454f5]"
            }`}
          >
            <span>{label}</span>
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#3454f5] transition-all duration-200 ${
                isActive ? "w-12 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default NavbarLinks;
