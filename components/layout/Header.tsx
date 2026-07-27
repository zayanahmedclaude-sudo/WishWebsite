"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { navigationItems } from "@/data/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setIsOpen(false), [pathname]);

  return (
    <header className="site-header">
      <Container className="header-inner">
        <Link href="/" className="brand" aria-label="W.I.S.H. home">
          <Image
            src="/Wish Logo.png"
            alt=""
            width={706}
            height={768}
            className="brand-logo"
            priority
          />
          <span>
            <strong>W.I.S.H.</strong>
            <small>Women in Support and Help</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-cta" href="/meetings">
          View meeting dates
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </Container>
      <Container>
        <MobileNav isOpen={isOpen} onNavigate={() => setIsOpen(false)} />
      </Container>
    </header>
  );
}
