import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
      <Image src="/skillSphere-logo.png" alt="SkillSphere Logo" width={42} height={42} className="rounded-lg" />
      <div>
        <span className="block text-[1.9rem] font-bold tracking-tight text-slate-900">SkillSphere</span>
        <span className="block text-[11px] font-medium uppercase tracking-[0.16em] text-[#5a67d8]">
          Online Learning Platform
        </span>
      </div>
    </Link>
  );
};

export default NavbarLogo;
