"use client"

import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section
      id="cta-section"
      className="bg-white px-6 py-24 text-slate-900 md:py-32 border-t border-border"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
          Get Started
        </p>
        <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          {'다음 변화의'}
          <br />
          {'주인공이 되세요'}
        </h2>
        <p className="mx-auto mb-12 max-w-md text-base leading-relaxed opacity-60 md:text-lg">
          {'브랜드의 방향성부터 매출 전환까지, 1:1 코칭으로 함께 만들어갑니다.'}
        </p>
        <a
          href="http://pf.kakao.com/_lxkxjXG"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-brand px-10 py-5 text-base font-medium tracking-wider text-white transition-all hover:opacity-90 shadow-lg hover:shadow-xl"
        >
          {'지금 문의하기'}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
        <p className="mt-6 text-xs opacity-40">
          {'상담은 무료이며, 부담 없이 브랜드 현황을 나눠보세요.'}
        </p>
      </div>
    </section>
  )
}
