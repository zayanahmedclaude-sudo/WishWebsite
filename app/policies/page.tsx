import type { Metadata } from "next";
import { FileCheck2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CTASection } from "@/components/shared/CTASection";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "W.I.S.H. Policies",
  description: "Read official W.I.S.H. policies as they become available.",
  alternates: { canonical: "/policies" },
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="W.I.S.H. policies"
        title="Clear expectations support a strong community."
        description="This page will be the central place for official participation and meeting policies."
      />
      <section className="section">
        <Container>
          <div className="empty-state">
            <FileCheck2 aria-hidden="true" />
            <span>Policy update</span>
            <h2>Official W.I.S.H. policies will be published here after final review.</h2>
            <p>
              Questions about participation or an upcoming meeting may be sent
              directly to Kathleen.
            </p>
          </div>
        </Container>
      </section>
      <CTASection
        title="Need guidance before a meeting?"
        description="Contact Kathleen directly for current W.I.S.H. information."
        primaryLabel="Contact Kathleen"
        primaryHref="/contact"
        secondaryLabel="View meetings"
        secondaryHref="/meetings"
      />
    </>
  );
}
