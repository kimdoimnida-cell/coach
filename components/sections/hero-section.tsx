"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center bg-primary px-6 py-24 text-primary-foreground">
      {/* Top Logo */}
      <div className="absolute top-8 left-6 md:left-12">
        <Image
          src="/images/ylz-media-logo-white.png"
          alt="YLZ MEDIA"
          width={140}
          height={32}
          className="h-6 w-auto opacity-80 md:h-7"
          priority
        />
      </div>

      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-sm font-medium tracking-[0.3em] uppercase text-brand">
          Premium 1:1 Coaching
        </p>
        <h1 className="mb-8 text-4xl font-black leading-tight tracking-tight text-balance md:text-6xl lg:text-7xl">
          {'브랜드 SNS 운영'}
          <br />
          {'1:1 코칭 프로그램'}
        </h1>
        <p className="mx-auto mb-12 max-w-xl text-lg leading-relaxed font-light opacity-80 md:text-xl">
          {'브랜드 정체성을 명확히 하고,'}
          <br />
          {'SNS를 매출 구조로 전환하는 프리미엄 코칭'}
        </p>
        <a
          href="http://pf.kakao.com/_lxkxjXG"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-brand px-8 py-4 text-sm font-medium tracking-wider text-white transition-all hover:opacity-90"
        >
          {'상담 신청하기'}
        </a>
      </div>
      <div className="absolute bottom-12 animate-bounce">
        <ArrowDown className="h-5 w-5 opacity-40" />
      </div>
    </section>
  )
}
