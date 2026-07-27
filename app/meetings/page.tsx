import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { MeetingCard } from "@/components/meetings/MeetingCard";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { meetings } from "@/data/meetings";

export const metadata: Metadata = {
  title: "2026 W.I.S.H. Meetings",
  description:
    "View confirmed 2026 W.I.S.H. meeting dates and preparation details.",
  alternates: { canonical: "/meetings" },
};

export default function MeetingsPage() {
  return (
    <>
      <PageHero
        eyebrow="2026 meetings"
        title="Your central place for W.I.S.H. dates."
        description="Review the confirmed gatherings below and arrive prepared to connect, contribute and share a trusted resource."
      />
      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="Confirmed schedule"
            title="Upcoming gatherings"
            description="Only confirmed dates are shown. Additional meeting details are shared directly with attendees."
          />
          <div className="meeting-list">
            {meetings.map((meeting) => (
              <MeetingCard key={meeting.slug} meeting={meeting} />
            ))}
          </div>
        </Container>
      </section>
      <section className="section soft-section">
        <Container className="two-column-copy">
          <SectionHeading
            eyebrow="Before you join"
            title="A little preparation creates more value."
          />
          <ol className="plain-steps">
            <li>Review the Five-Star Vendor standard.</li>
            <li>Choose one person you would confidently recommend.</li>
            <li>Bring their name, business and direct contact information.</li>
          </ol>
        </Container>
      </section>
      <CTASection
        title="Have a question about an upcoming meeting?"
        description="Kathleen is your direct contact for W.I.S.H. meeting information."
        primaryLabel="Contact Kathleen"
        primaryHref="/contact"
        secondaryLabel="Review Five-Star Vendors"
        secondaryHref="/five-star-vendor"
      />
    </>
  );
}
