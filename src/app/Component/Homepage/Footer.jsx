import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, X } from "lucide-react";

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M6.47 8.64H3.93V20h2.54V8.64ZM5.2 4A1.48 1.48 0 1 0 5.2 6.96 1.48 1.48 0 0 0 5.2 4Zm5.13 4.64H7.8V20h2.52v-5.62c0-1.48.28-2.9 2.1-2.9 1.8 0 1.82 1.68 1.82 3V20h2.54v-5.97c0-2.94-.63-5.2-3.9-5.2-1.58 0-2.64.87-3.08 1.87V8.64Z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M13.22 20v-6.57h2.21l.33-2.57h-2.54V9.22c0-.74.2-1.25 1.28-1.25h1.36V5.66c-.66-.07-1.33-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.88H8.3v2.57h2.23V20h2.69Z" />
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M20.57 7.3a2.78 2.78 0 0 0-1.95-1.97C16.9 4.86 12 4.86 12 4.86s-4.9 0-6.62.47A2.78 2.78 0 0 0 3.43 7.3C2.96 9.03 2.96 12 2.96 12s0 2.97.47 4.7a2.78 2.78 0 0 0 1.95 1.97c1.72.47 6.62.47 6.62.47s4.9 0 6.62-.47a2.78 2.78 0 0 0 1.95-1.97c.47-1.73.47-4.7.47-4.7s0-2.97-.47-4.7ZM10.4 15.05V8.95L15.5 12l-5.1 3.05Z" />
  </svg>
);

const contactItems = [
  {
    label: "+1 (555) 987-6543",
    Icon: Phone
  },
  {
    label: "support@skillsphere.com",
    Icon: Mail
  },
  {
    label: "123 Learning Lane\nEducation City, 10001",
    Icon: MapPin
  }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    tone: "text-[#0a66c2]",
    Icon: LinkedInIcon
  },
  {
    label: "X",
    href: "#",
    tone: "text-slate-900",
    Icon: X
  },
  {
    label: "Facebook",
    href: "#",
    tone: "text-[#1877f2]",
    Icon: FacebookIcon
  },
  {
    label: "YouTube",
    href: "#",
    tone: "text-[#ff2d2d]",
    Icon: YouTubeIcon
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
                {contactItems.map(({ label, Icon }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]">
                      <Icon className="h-4.5 w-4.5" strokeWidth={2} />
                    </span>
                    <span className="whitespace-pre-line leading-6">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-[24%]">
              <h2 className="mb-4 text-lg font-semibold">Social Links</h2>
              <div className="flex flex-wrap items-center gap-3">
                {socialLinks.map(({ label, href, tone, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white text-sm shadow-[0_10px_22px_rgba(0,0,0,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_14px_28px_rgba(0,0,0,0.18)] ${tone}`}
                  >
                    <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
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

