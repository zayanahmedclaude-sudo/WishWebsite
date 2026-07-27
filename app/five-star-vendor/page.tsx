import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { VendorStandardList } from "@/components/vendor/VendorStandardList";
import { vendorSelfCheckQuestions } from "@/data/vendorStandards";
import { vendorExamples, whatToBringItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Five-Star Vendor Exchange | W.I.S.H.",
  description:
    "Learn how the W.I.S.H. Five-Star Vendor Exchange turns trusted recommendations into a valuable community resource.",
  alternates: { canonical: "/five-star-vendor" },
};

export default function VendorPage() {
  return (
    <>
      <PageHero
        eyebrow="Five-Star Vendor Exchange"
        title="Referrals you can stand behind."
        description="Share one exceptional professional or service provider whose integrity, consistency and care make them truly referral-safe."
      />
      <section className="section">
        <Container className="two-column-copy">
          <SectionHeading
            eyebrow="Why it matters"
            title="Trust shortens the search."
            description="A recommendation from someone you trust can save hours of research, prevent expensive mistakes and reduce the stress of choosing an unknown provider."
          />
          <div className="quote-panel">
            <ShieldCheck aria-hidden="true" />
            <blockquote>
              “I trust this person to take care of you.”
            </blockquote>
            <p>That is the standard behind every Five-Star Vendor referral.</p>
          </div>
        </Container>
      </section>
      <section className="section soft-section">
        <Container>
          <SectionHeading
            eyebrow="Who can be shared"
            title="Professional or personal. Always exceptional."
            description="A Five-Star Vendor may support your business, your home or your everyday life."
          />
          <ul className="tag-list">
            {vendorExamples.map((example) => (
              <li key={example}>{example}</li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="The W.I.S.H. standard"
            title="Twelve qualities that make a referral safe."
            description="Use these qualities to consider the full experience a vendor creates, not simply the service they deliver."
          />
          <VendorStandardList />
        </Container>
      </section>
      <section className="section coral-section">
        <Container className="two-column-copy">
          <SectionHeading
            eyebrow="A quick self-check"
            title="Before you share their name, ask yourself..."
          />
          <ul className="check-list light">
            {vendorSelfCheckQuestions.map((question) => (
              <li key={question}>
                <Check aria-hidden="true" />
                {question}
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Come prepared"
            title="What to bring to the meeting."
            description="Gather accurate contact details so attendees can follow up with confidence."
          />
          <ol className="bring-list">
            {whatToBringItems.map((item, index) => (
              <li key={item.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <ButtonLink href="/meetings">View meeting dates</ButtonLink>
        </Container>
      </section>
      <CTASection
        title="Know someone exceptional?"
        description="Choose one referral-safe vendor, gather their details and come ready to share."
        primaryLabel="Prepare for a meeting"
      />
    </>
  );
}
