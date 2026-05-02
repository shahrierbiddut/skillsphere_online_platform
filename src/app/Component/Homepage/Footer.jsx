import React from "react";
import Link from "next/link";

const contactItems = [
  {
    label: "+1 (555) 987-6543",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.79.61 2.65a2 2 0 0 1-.45 2.11L8 9.94a16 16 0 0 0 6.06 6.06l1.46-1.27a2 2 0 0 1 2.11-.45c.86.28 1.75.49 2.65.61A2 2 0 0 1 22 16.92Z"
        />
      </svg>
    )
  },
  {
    label: "support@skillsphere.com",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16v12H4z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
      </svg>
    )
  },
  {
    label: "123 Learning Lane\nEducation City, 10001",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="2">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z"
        />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    )
  }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    tone: "text-[#0a66c2]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M6.47 8.64H3.93V20h2.54V8.64ZM5.2 4A1.48 1.48 0 1 0 5.2 6.96 1.48 1.48 0 0 0 5.2 4Zm5.13 4.64H7.8V20h2.52v-5.62c0-1.48.28-2.9 2.1-2.9 1.8 0 1.82 1.68 1.82 3V20h2.54v-5.97c0-2.94-.63-5.2-3.9-5.2-1.58 0-2.64.87-3.08 1.87V8.64Z" />
      </svg>
    )
  },
  {
    label: "X",
    href: "#",
    tone: "text-slate-900",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M18.9 4H21l-4.58 5.24L21.8 20h-4.23l-3.32-6.62L8.46 20H6.35l4.89-5.59L6 4h4.34l3 6.02L18.9 4Zm-.74 14.35h1.17L10.2 5.58H8.94l9.22 12.77Z" />
      </svg>
    )
  },
  {
    label: "Facebook",
    href: "#",
    tone: "text-[#1877f2]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M13.22 20v-6.57h2.21l.33-2.57h-2.54V9.22c0-.74.2-1.25 1.28-1.25h1.36V5.66c-.66-.07-1.33-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.88H8.3v2.57h2.23V20h2.69Z" />
      </svg>
    )
  },
  {
    label: "YouTube",
    href: "#",
    tone: "text-[#ff2d2d]",
    icon: (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current">
        <path d="M20.57 7.3a2.78 2.78 0 0 0-1.95-1.97C16.9 4.86 12 4.86 12 4.86s-4.9 0-6.62.47A2.78 2.78 0 0 0 3.43 7.3C2.96 9.03 2.96 12 2.96 12s0 2.97.47 4.7a2.78 2.78 0 0 0 1.95 1.97c1.72.47 6.62.47 6.62.47s4.9 0 6.62-.47a2.78 2.78 0 0 0 1.95-1.97c.47-1.73.47-4.7.47-4.7s0-2.97-.47-4.7ZM10.4 15.05V8.95L15.5 12l-5.1 3.05Z" />
      </svg>
    )
  }
];

const legalLinks = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" }
];

const Footer = () => {
  return (
    <footer className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#11348f] via-[#1545ad] to-[#1f4ebc] px-5 py-6 text-white shadow-[0_18px_45px_rgba(17,52,143,0.24)] sm:px-8">
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_45%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0 lg:w-[30%]">
              <h2 className="mb-3 text-lg font-semibold">Contact Info</h2>
              <div className="space-y-3 text-sm text-white/90">
                {contactItems.map(item => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
                      {item.icon}
                    </span>
                    <span className="whitespace-pre-line leading-6">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[24%]">
              <h2 className="mb-4 text-lg font-semibold">Social Links</h2>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(link => (
                  <Link
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-sm shadow-[0_10px_22px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_14px_28px_rgba(0,0,0,0.18)] ${link.tone}`}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/90 lg:w-auto lg:self-center">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  {index > 0 && <span className="hidden text-white/35 sm:inline">|</span>}
                  <Link
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
