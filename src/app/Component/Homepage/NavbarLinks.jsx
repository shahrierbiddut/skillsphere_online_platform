"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavbarLinks = () => {
    const pathname = usePathname();
    const links = [
        { href: '/', label: 'Home' },
        { href: '/courses', label: 'Courses' },
        { href: '/profile', label: 'My Profile' },
    ];

    return (
        <nav className="flex flex-1 flex-wrap items-center justify-center gap-6 md:gap-8">
            {links.map(({ href, label }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

                return (
                    <Link
                        key={href}
                        href={href}
                        aria-current={isActive ? 'page' : undefined}
                        className={`group relative px-1 py-2 text-base font-medium transition-colors duration-200 ${
                            isActive ? 'text-[#3555f6]' : 'text-slate-700 hover:text-[#3555f6]'
                        }`}
                    >
                        <span>{label}</span>
                        <span
                            aria-hidden="true"
                            className={`absolute left-1/2 bottom-0 h-0.5 -translate-x-1/2 rounded-full bg-[#3555f6] transition-all duration-200 ${
                                isActive ? 'w-14 opacity-100' : 'w-0 opacity-0 group-hover:w-10 group-hover:opacity-70'
                            }`}
                        />
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavbarLinks;
