import React from "react";
import Link from "next/link";

const LoggedOutNav = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
      <Link
        href="/login"
        className="rounded-xl border border-[#d5defd] px-5 py-2.5 text-sm font-semibold text-[#3454f5] transition-all duration-200 hover:border-[#3454f5] hover:bg-[#f5f7ff]"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="rounded-xl bg-gradient-to-r from-[#4b5eff] to-[#3554f6] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(53,84,246,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(53,84,246,0.26)]"
      >
        Register
      </Link>
    </div>
  );
};

export default LoggedOutNav;
