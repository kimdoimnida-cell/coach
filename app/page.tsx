import Image from "next/image"
import { HeroSection } from "@/components/sections/hero-section"
import { PainPointsSection } from "@/components/sections/pain-points-section"
import { ProblemSection } from "@/components/sections/problem-section"
import { SolutionSection } from "@/components/sections/solution-section"
import { CaseStudiesSection } from "@/components/sections/case-studies-section"
import { TestimonialScroller } from "@/components/sections/testimonial-scroller"
import { PricingSection } from "@/components/sections/pricing-section"
import { CtaSection } from "@/components/sections/cta-section"
import { FloatingCta } from "@/components/sections/floating-cta"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <PainPointsSection />
      <ProblemSection />
      <SolutionSection />
      <CaseStudiesSection />
      <TestimonialScroller />
      <PricingSection />
      <CtaSection />
      <footer className="bg-primary px-6 py-12 text-center">
        <Image
          src="/images/ylz-media-logo-white.png"
          alt="YLZ MEDIA"
          width={120}
          height={28}
          className="mx-auto mb-4 h-5 w-auto opacity-50"
        />
        <p className="text-xs tracking-wider text-primary-foreground/30">
          {'All rights reserved.'}
        </p>
      </footer>
      <FloatingCta />
    </main>
  )
}
