import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WishVideoPlayer } from "@/components/shared/WishVideoPlayer";

export const metadata: Metadata = {
  title: "W.I.S.H. Welcome Video",
  description:
    "Watch the W.I.S.H. welcome video and prepare for your first gathering.",
  alternates: { canonical: "/video" },
};

export default function VideoPage() {
  return (
    <>
      <PageHero
        eyebrow="Welcome video"
        title="Meet W.I.S.H. before the meeting."
        description="The welcome video will introduce the purpose, values and preparation that help every gathering feel meaningful."
      />
      <section className="section">
        <Container className="video-page-grid">
          <WishVideoPlayer />
          <div>
            <SectionHeading
              eyebrow="What you will learn"
              title="A thoughtful start to your W.I.S.H. experience."
              description="The welcome video will help new attendees understand NET-WORTHING, the Five-Star Vendor Exchange and how to arrive ready to contribute."
            />
            <div className="button-row">
              <ButtonLink href="/about" variant="secondary">
                Learn about W.I.S.H.
              </ButtonLink>
              <ButtonLink href="/five-star-vendor" variant="secondary">
                Five-Star Vendor guide
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
      <CTASection
        title="You can prepare while the video is on its way."
        description="Review the confirmed meeting dates and choose a trusted vendor to bring."
      />
    </>
  );
}
