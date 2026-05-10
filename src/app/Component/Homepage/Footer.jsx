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
    label: "+088 1234 5678",
    Icon: Phone
  },
  {
    label: "support@skillsphere.com",
    Icon: Mail
  },
  {
    label: "123 Learning Lane\ Education City Dhaka, 1201",
    Icon: MapPin
  }
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    bgColor: "bg-[#1877f2]",
    Icon: FacebookIcon
  },
  {
    label: "X",
    href: "#",
    bgColor: "bg-[#1a1a1a]",
    Icon: X
  },
  {
    label: "LinkedIn",
    href: "#",
    bgColor: "bg-[#0a66c2]",
    Icon: LinkedInIcon
  },
  {
    label: "YouTube",
    href: "#",
    bgColor: "bg-[#e53935]",
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
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1a3a7a] to-[#2d5caa] px-8 py-8 text-white shadow-lg sm:px-10">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Contact Info Section */}
            <div className="lg:flex-1">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Contact Info</h2>
              <div className="space-y-1.5 text-xs text-gray-100">
                {contactItems.map(({ label, Icon }) => (
                  <div key={label} className="flex items-center gap-2">
                    <Icon className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links Section */}
            <div className="lg:flex-1 lg:text-center">
              <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-white">Social Links</h2>
              <div className="flex items-center justify-start gap-2 lg:justify-center">
                {socialLinks.map(({ label, href, bgColor, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`flex h-8 w-8 items-center justify-center rounded-full ${bgColor} text-white transition-all duration-200 hover:scale-110 hover:shadow-lg`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={2} fill="white" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Links Section */}
            <div className="flex items-center gap-4 text-xs text-gray-100 lg:justify-end">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.label}>
                  {index > 0 && <span className="text-gray-300">|</span>}
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

