import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/shared/PageHero";
import { contact } from "@/data/contact";

export const metadata: Metadata = {
  title: "Contact W.I.S.H.",
  description:
    "Contact Kathleen Ronald for W.I.S.H. meeting and participation information.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact W.I.S.H."
        title="Your questions are welcome."
        description="For meeting information, participation questions or W.I.S.H. updates, connect directly with Kathleen."
      />
      <section className="section">
        <Container className="contact-layout">
          <div className="contact-intro">
            <Image
              src="/imgi_3_680604c6773e1611ddf7516c.jpg"
              alt="Kathleen Ronald"
              width={1200}
              height={1754}
              className="contact-portrait"
            />
            <h2>{contact.name}</h2>
            <p>
              {contact.title}, {contact.company}
            </p>
            <p>
              Please send questions or responses directly to Kathleen rather
              than replying to a group message.
            </p>
          </div>
          <address className="contact-list">
            <a href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" />
              <span>
                <small>Email</small>
                {contact.email}
              </span>
            </a>
            <a href={`tel:${contact.phoneRaw}`}>
              <Phone aria-hidden="true" />
              <span>
                <small>Phone</small>
                {contact.phone}
              </span>
            </a>
            <div>
              <MapPin aria-hidden="true" />
              <span>
                <small>Mailing address</small>
                1549 S. Holt Ave.
                <br />
                Los Angeles, CA 90035
              </span>
            </div>
            <a href={contact.websiteUrl}>
              <ExternalLink aria-hidden="true" />
              <span>
                <small>Website</small>
                {contact.websiteLabel}
              </span>
            </a>
            <div>
              <Building2 aria-hidden="true" />
              <span>
                <small>Company</small>
                Speaktacular!
              </span>
            </div>
          </address>
        </Container>
      </section>
    </>
  );
}
