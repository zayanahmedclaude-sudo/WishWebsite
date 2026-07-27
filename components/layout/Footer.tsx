import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { contact } from "@/data/contact";
import { navigationItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <Link href="/" aria-label="W.I.S.H. home">
            <Image
              src="/Wish Logo.png"
              alt="W.I.S.H. Women in Support and Help"
              width={706}
              height={768}
            />
          </Link>
          <p>
            A monthly NET-WORTHING experience created for connection,
            collaboration, community and genuine support.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <nav className="footer-nav" aria-label="Footer">
            {navigationItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <h2>Contact Kathleen</h2>
          <address>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>
            <span>{contact.address}</span>
          </address>
        </div>
      </Container>
      <Container className="footer-bottom">
        <p>© 2026 W.I.S.H. All rights reserved.</p>
        <p>
          Created by {contact.name}, Owner of{" "}
          <a href={contact.websiteUrl}>Speaktacular!</a>
        </p>
      </Container>
    </footer>
  );
}
