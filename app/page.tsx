import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { Container } from "@/components/layout/Container";
import { MeetingCard } from "@/components/meetings/MeetingCard";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { WishVideoPlayer } from "@/components/shared/WishVideoPlayer";
import { meetings } from "@/data/meetings";
import { newMemberSteps, values } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section intro-section">
        <Container>
          <div className="intro-grid">
            <SectionHeading
              eyebrow="Worth your time"
              title="Networking, reimagined around real value."
              description="W.I.S.H. calls it NET-WORTHING: a relationship-first experience designed to be worth the time, energy and investment of every woman in the room."
            />
            <div className="value-list">
              {values.map((value) => (
                <div key={value.title}>
                  <span aria-hidden="true">✦</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section vendor-feature">
        <Container className="split-layout">
          <div className="editorial-image">
            <Image
              src="/wish-community.png"
              alt="Professional women collaborating in a welcoming setting"
              width={1536}
              height={1024}
            />
          </div>
          <div className="split-copy">
            <SectionHeading
              eyebrow="Five-Star Vendor Exchange"
              title="A trusted resource is worth sharing."
              description="Bring one exceptional vendor you would recommend without hesitation. Together, W.I.S.H. creates a circle of referrals grounded in integrity, consistency and care."
            />
            <ul className="check-list">
              <li>
                <Check aria-hidden="true" /> Save time finding trusted help
              </li>
              <li>
                <Check aria-hidden="true" /> Avoid costly service missteps
              </li>
              <li>
                <Check aria-hidden="true" /> Support excellence through referrals
              </li>
            </ul>
            <ButtonLink href="/five-star-vendor">
              Explore the exchange <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section meetings-preview">
        <Container>
          <div className="heading-row">
            <SectionHeading
              eyebrow="2026 gatherings"
              title="Upcoming W.I.S.H. meetings"
              description="Find the confirmed dates and the preparation details you need before joining us."
            />
            <Link className="text-link" href="/meetings">
              View all meetings <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="meeting-list">
            {meetings.slice(0, 2).map((meeting) => (
              <MeetingCard key={meeting.slug} meeting={meeting} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section orientation-section">
        <Container>
          <SectionHeading
            eyebrow="New to W.I.S.H.?"
            title="Arrive ready to connect."
            description="Three simple steps will help you get the most from your first W.I.S.H. experience."
          />
          <div className="step-list">
            {newMemberSteps.map((step) => (
              <Link key={step.number} href={step.href}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <ArrowRight aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="section video-preview">
        <Container className="video-preview-inner">
          <WishVideoPlayer compact />
          <div>
            <SectionHeading
              eyebrow="Welcome video"
              title="Get to know W.I.S.H."
              description="Watch Kathleen share the energy and perspective behind her work, then discover the values and preparation that shape each W.I.S.H. gathering."
            />
            <ButtonLink href="/video" variant="secondary">
              Visit the video page
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="section founder-preview">
        <Container className="founder-inner">
          <div className="kathleen-image">
            <Image
              src="/imgi_3_680604c6773e1611ddf7516c.jpg"
              alt="Kathleen Ronald"
              width={1200}
              height={1754}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Created by Kathleen Ronald"
              title="High standards. Warm connections. Genuine support."
              description="Kathleen Ronald (h.c.), Owner of Speaktacular!, brings more than 20 years of customer-service teaching and a deep commitment to integrity, excellence and accountability."
            />
            <ButtonLink href="/about" variant="secondary">
              About W.I.S.H. and Kathleen
            </ButtonLink>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to join the next conversation?"
        description="Review the confirmed meeting dates or contact Kathleen directly with your questions."
      />
    </>
  );
}
