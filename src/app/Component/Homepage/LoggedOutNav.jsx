import React from 'react';
import Link from 'next/link';

const LoggedOutNav = () => {
    return (
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
            <Link
                href="/login"
                className="rounded-2xl border border-[#cfd8ff] px-6 py-2.5 text-sm font-semibold text-[#3555f6] transition-all duration-200 hover:border-[#3555f6] hover:bg-[#f5f7ff]"
            >
                Login
            </Link>
            <Link
                href="/register"
                className="rounded-2xl bg-gradient-to-r from-[#5b4df5] via-[#3f7cff] to-[#2d6bff] px-6 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(63,124,255,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(63,124,255,0.3)]"
            >
                Register
            </Link>
        </div>
    );
};

export default LoggedOutNav;
