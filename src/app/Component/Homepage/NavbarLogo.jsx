import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NavbarLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <Image src="/skillsphere-logo.png" alt="SkillSphere Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-2xl font-bold tracking-tight text-slate-900">SkillSphere</span>
        </Link>
    );
};

export default NavbarLogo;
