import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { audiencePoints, kathleenHighlights, values } from "@/data/site";

export const metadata: Metadata = {
  title: "About W.I.S.H. | Women in Support and Help",
  description:
    "Discover the NET-WORTHING philosophy and values behind W.I.S.H.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About W.I.S.H."
        title="Relationships with purpose."
        description="W.I.S.H. brings extraordinary women together to connect authentically, share trusted resources and create meaningful personal and professional opportunities."
      />
      <section className="section">
        <Container className="split-layout">
          <div className="split-copy">
            <SectionHeading
              eyebrow="The philosophy"
              title="This is NET-WORTHING."
              description="Traditional networking can feel transactional. W.I.S.H. is designed differently: every conversation, introduction and resource should add genuine value and be worth your time and investment."
            />
            <p className="body-copy">
              The experience is intentionally relationship-driven. Women arrive
              ready to listen, contribute and help one another grow through
              integrity, excellence and thoughtful follow-through.
            </p>
          </div>
          <div className="editorial-image tall">
            <Image
              src="/wish-community.png"
              alt="Women exchanging ideas in a bright collaborative setting"
              width={1536}
              height={1024}
            />
          </div>
        </Container>
      </section>
      <section className="section soft-section">
        <Container>
          <SectionHeading
            eyebrow="What guides us"
            title="Four values, one supportive circle."
          />
          <div className="value-list horizontal">
            {values.map((value) => (
              <div key={value.title}>
                <span aria-hidden="true">✦</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="two-column-copy">
          <SectionHeading
            eyebrow="Who it is for"
            title="You may feel at home here if..."
          />
          <ul className="check-list large">
            {audiencePoints.map((point) => (
              <li key={point}>
                <Check aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="section founder-story">
        <Container className="founder-inner">
          <div className="kathleen-image kathleen-speaking">
            <Image
              src="/imgi_97_66f317a5aaa9bfbde091f599.png"
              alt="Kathleen Ronald speaking at an event"
              width={708}
              height={716}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Meet the founder"
              title="Kathleen Ronald (h.c.)"
              description="Kathleen is the Owner of Speaktacular! and the creator of W.I.S.H. Her approach pairs a high standard of service with a belief that the right relationships can transform both business and life."
            />
            <ul className="plain-list">
              {kathleenHighlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="button-row">
              <ButtonLink href="/meetings">View meetings</ButtonLink>
              <ButtonLink href="/five-star-vendor" variant="secondary">
                Explore Five-Star Vendors
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <CTASection
        title="Bring your experience, your ideas and your support."
        description="See when W.I.S.H. meets next and prepare for a meaningful conversation."
      />
    </>
  );
}
