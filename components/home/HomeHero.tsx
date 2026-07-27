import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Eyebrow } from "@/components/shared/Eyebrow";

export function HomeHero() {
  return (
    <section className="home-hero">
      <Container className="home-hero-grid">
        <div className="home-hero-copy">
          <Eyebrow>Women in Support and Help</Eyebrow>
          <h1>
            Meaningful connections. <em>Women supporting women.</em>
          </h1>
          <p>
            A monthly NET-WORTHING experience where extraordinary women build
            authentic relationships, exchange trusted resources and grow
            together.
          </p>
          <div className="button-row">
            <ButtonLink href="/meetings">
              View meeting dates <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href="/video" variant="secondary">
              <Play size={17} aria-hidden="true" /> Watch the W.I.S.H. video
            </ButtonLink>
          </div>
        </div>
        <div className="hero-image-wrap">
          <Image
            src="/wish-community.png"
            alt="A diverse group of professional women sharing ideas around a table"
            width={1536}
            height={1024}
            className="hero-image"
            priority
          />
          <div className="net-worthing-note">
            <span>Not networking.</span>
            <strong>NET-WORTHING.</strong>
          </div>
          <span className="spark" aria-hidden="true">
            ✦
          </span>
        </div>
      </Container>
    </section>
  );
}
