import React from "react";

const AuthShell = ({ icon, title, subtitle, children }) => {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 rounded-r-full bg-[radial-gradient(circle_at_left,rgba(102,112,255,0.14),transparent_70%)] sm:w-56" />
      <div className="pointer-events-none absolute right-0 top-16 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(98,123,255,0.18),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute bottom-8 left-6 h-24 w-24 bg-[radial-gradient(circle,#c7d2fe_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-60" />
      <div className="pointer-events-none absolute right-6 top-28 h-24 w-24 bg-[radial-gradient(circle,#c7d2fe_1.2px,transparent_1.2px)] [background-size:12px_12px] opacity-60" />

      <div className="relative mx-auto w-full max-w-xl">
        <div className="overflow-hidden rounded-[28px] border border-[#dde5ff] bg-white/95 px-5 py-8 shadow-[0_28px_80px_rgba(33,63,138,0.14)] backdrop-blur sm:px-8">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#f6f8ff] to-transparent" />

          <div className="relative">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[#ddd7ff] bg-[#f6f2ff] text-[#6b57f5] shadow-[0_12px_24px_rgba(107,87,245,0.14)]">
              {icon}
            </div>

            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900">{title}</h1>
              <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
            </div>

            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthShell;
