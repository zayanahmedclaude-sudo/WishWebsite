import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function CTASection({
  title,
  description,
  primaryLabel = "View meeting dates",
  primaryHref = "/meetings",
  secondaryLabel = "Contact Kathleen",
  secondaryHref = "/contact",
}: {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="cta-section">
      <Container className="cta-inner">
        <div>
          <span className="eyebrow eyebrow-light">Your next step</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="button-row">
          <ButtonLink href={primaryHref} variant="light">
            {primaryLabel}
          </ButtonLink>
          <ButtonLink href={secondaryHref} variant="secondary">
            {secondaryLabel}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
