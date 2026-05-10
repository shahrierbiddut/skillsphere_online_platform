import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone, X } from "lucide-react";

const LinkedInIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M6.47 8.64H3.93V20h2.54V8.64ZM5.2 4A1.48 1.48 0 1 0 5.2 6.96 1.48 1.48 0 0 0 5.2 4Zm5.13 4.64H7.8V20h2.52v-5.62c0-1.48.28-2.9 2.1-2.9 1.8 0 1.82 1.68 1.82 3V20h2.54v-5.97c0-2.94-.63-5.2-3.9-5.2-1.58 0-2.64.87-3.08 1.87V8.64Z" />
  </svg>
);

const FacebookIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.22 20v-6.57h2.21l.33-2.57h-2.54V9.22c0-.74.2-1.25 1.28-1.25h1.36V5.66c-.66-.07-1.33-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.88H8.3v2.57h2.23V20h2.69Z" />
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
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
    label: "123 Learning Lane, Education City, 10001",
    Icon: MapPin
  }
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shahrier-hossain-biddut-3b847528a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    bgColor: "bg-[#0A66C2]",
    Icon: LinkedInIcon
  },
  {
    label: "X",
    href: "https://twitter.com",
    bgColor: "bg-black",
    Icon: X
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1B6Hw7xVdx/",
    bgColor: "bg-[#1877F2]",
    Icon: FacebookIcon
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=1OdHatIkFa4",
    bgColor: "bg-[#FF0000]",
    Icon: YouTubeIcon
  }
];

const legalLinks = [
  {
    label: "Terms & Conditions",
    href: "/terms"
  },
  {
    label: "Privacy Policy",
    href: "/privacy"
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        <div className="rounded-2xl bg-gradient-to-r from-[#0b2a78] via-[#123c9c] to-[#1d57c8] px-6 py-7 text-white shadow-xl">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Contact Info */}
            <div className="flex-1">
              <h2 className="mb-4 text-sm font-semibold text-white">
                Contact Info
              </h2>

              <div className="space-y-3 text-sm text-blue-100">
                {contactItems.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3"
                  >
                    <Icon
                      className="mt-0.5 h-4 w-4 text-white"
                      strokeWidth={2}
                    />

                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex-1 md:text-center">
              <h2 className="mb-4 text-sm font-semibold text-white">
                Social Links
              </h2>

              <div className="flex items-center gap-3 md:justify-center">
                {socialLinks.map(
                  ({ label, href, bgColor, Icon }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColor} transition-transform duration-200 hover:scale-105`}
                    >
                      <Icon className="h-4 w-4 text-white" />
                    </Link>
                  )
                )}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-1 items-center gap-5 text-sm text-blue-100 md:justify-end">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;