"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 px-6 py-4 backdrop-blur-sm transition-all duration-500 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm font-medium text-foreground">
            {'브랜드 SNS 1:1 코칭'}
          </p>
          <p className="text-xs text-muted-foreground">
            {'총 8회 · 2개월 과정'}
          </p>
        </div>
        <a
          href="http://pf.kakao.com/_lxkxjXG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 bg-brand px-6 py-3 text-sm font-medium text-white transition-all hover:opacity-90 sm:w-auto"
        >
          {'문의하기'}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
