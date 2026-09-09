"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { siteContent } from "@/data/site-content";

const navigation = [
  { href: "/#plants", label: "Our plants" },
  { href: "/about", label: "Meet George" },
  { href: "/contact", label: "Plan a visit" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="page-width header-inner">
        <Link
          href="/"
          className="wordmark"
          aria-label="Tes Farms home"
          onClick={() => setOpen(false)}
        >
          tes farms<span className="wordmark-dot">.</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={
                pathname === item.href
                  ? "page"
                  : item.href === "/#plants" && pathname.startsWith("/plants/")
                    ? "location"
                    : undefined
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          className="header-contact"
          href={`tel:+${siteContent.business.whatsapp}`}
        >
          <Phone size={17} aria-hidden="true" />
          <span>{siteContent.business.phone}</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={
              pathname === item.href
                ? "page"
                : item.href === "/#plants" && pathname.startsWith("/plants/")
                  ? "location"
                  : undefined
            }
          >
            {item.label}
            <ArrowUpRight size={22} aria-hidden="true" />
          </Link>
        ))}
      </nav>
    </header>
  );
}
