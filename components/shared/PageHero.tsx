import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/shared/Eyebrow";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="page-hero">
      <Container>
        <div className="page-hero-copy">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Container>
    </section>
  );
}
