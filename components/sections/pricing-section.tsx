"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const plans = [
  {
    id: "starting",
    name: "스타팅 플랜",
    subtitle: "혼자 시작하는 구조 세팅",
    price: "100만 원",
    features: [
      "AI 콘텐츠 기획/제작 자동화 패키지 제공",
      "1대1 맞춤 상담 (50분)",
      "맞춤형 수익화 전략 설계",
      "30일 콘텐츠 플랜 제공",
      "30일 후 성과 리포트 & 개선 피드백",
    ],
    highlight: false,
  },
  {
    id: "standard",
    name: "부스트 플랜",
    subtitle: "브랜드 SNS 체계 구축",
    price: "320만 원",
    overview: "총 8회 · 2개월 과정 / 주 1회 · 1시간 실시간 피드백 세션",
    features: [
      "브랜드 심층 진단",
      "타겟 고객 & 브랜드 콘셉 설정",
      "비주얼 아이덴티티 구축",
      "브랜드 스토리텔링 전략",
      "고객 전환 구조 설계",
      "주 1회 코칭 (총 8회)",
      "콘텐츠 피드백 주 2회",
      "+ 90만 원 상당 실전 AI/비즈니스 툴 패키지 제공",
    ],
    curriculum: {
      month1: {
        label: "브랜드 정체성과 SNS 전략 수립",
        weeks: [
          {
            week: "Week 1",
            title: "타겟 고객 정의 & 브랜드 콘셉 설정",
            items: [
              "우리 브랜드의 이상적 고객은 누구인가? (페르소나 구체화)",
              "그들은 무엇을 원하고, 어떤 고민을 하는가?",
              "우리 브랜드는 그들에게 어떤 존재로 인식되어야 하는가?",
              "브랜드 핵심 가치·메시지·키워드 추출",
              "SNS 콘셉 및 포지셔닝 설정",
            ],
          },
          {
            week: "Week 2",
            title: "브랜드 비주얼 아이덴티티 구축",
            items: [
              "타겟 고객에게 맞는 시각적 톤앤매너 설정",
              "브랜드 색깔이 드러나는 피드 구성 방향",
              "촬영 스타일, 각도, 컷 구성 방법",
              "일관된 브랜드 이미지를 만드는 콘텐츠 연출법",
            ],
          },
          {
            week: "Week 3",
            title: "브랜드 스토리텔링 전략 수립",
            items: [
              "브랜드의 철학과 가치를 스토리로 풀어내기",
              "고객이 공감하고 기억하는 브랜드 서사 만들기",
              "제품/서비스 스토리 설계",
              "반복 가능한 시그니처 콘텐츠 시리즈 기획",
            ],
          },
          {
            week: "Week 4",
            title: "고객 전환 구조 설계",
            items: [
              "브랜드 인지 → 관심 → 구매까지의 고객 여정 설계",
              "계정 전체를 '관계 맺고 싶은 브랜드'로 만드는 구조",
              "링크 트리·랜딩 페이지 구성",
              "하이라이트(브랜드 소개/제품/후기/비하인드) 설계",
              "DM/스토리 활용 전략 및 CTA 구조",
            ],
          },
        ],
        note: "* 1개월 차는 메인 코칭 진행 후, 잔여 시간 내에서 콘텐츠 피드백도 함께 진행됩니다.",
      },
      month2: {
        label: "콘텐츠 실행 & 브랜드 구축 완성",
        items: [
          "수립한 브랜드 콘셉과 전략을 실제 콘텐츠로 구현",
          "매주 업로드한 콘텐츠를 기반으로 1:1 실시간 코칭",
          "브랜드 정체성이 잘 드러나는지, 타겟 고객과 잘 연결되는지 점검",
          "톤앤매너·스토리 구조·메시지 전달력까지 세밀한 피드백",
          "필요 시 콘셉 조정, 브랜드 메시지 보완, 콘텐츠 방향성 재설정",
          "고객과의 접점 강화 및 전환 포인트 최적화",
        ],
      },
    },
    highlight: true,
  },
  {
    id: "premium",
    name: "프리미엄 플랜",
    subtitle: "매출 전환 밀착 관리",
    price: "1,000만 원",
    features: [
      "스타팅 플랜 + 부스트 플랜 전체 포함",
      "3개월 콘텐츠 플랜 기획",
      "3개월 주차별 피드백 진행",
      "월 별 맞춤 컨설팅",
      "24시간 전담 지원",
      "개인 페이지 기획",
      "개인 상품 구축 및 홍보전략",
      "프리미엄 네트워킹 우선 초대",
    ],
    highlight: false,
  },
]

export function PricingSection() {
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId)
  }

  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
            Pricing Plans
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {"나에게 맞는 플랜 선택하기"}
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-muted-foreground">
            {"브랜드 상황과 목표에 맞는 플랜을 선택하세요"}
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const isExpanded = expandedPlan === plan.id

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col overflow-hidden rounded-2xl transition-all ${
                  plan.highlight
                    ? "bg-primary text-primary-foreground ring-2 ring-brand"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlight && (
                  <div className="absolute top-0 right-0 bg-brand px-4 py-1 text-xs font-medium tracking-wider text-white uppercase">
                    추천
                  </div>
                )}

                {/* Card Header - Clickable */}
                <button
                  onClick={() => togglePlan(plan.id)}
                  className="w-full p-8 pb-6 text-left"
                >
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="mb-4 text-base opacity-70">
                    : "{plan.subtitle}"
                  </p>
                  <p className="text-xl font-bold">{plan.price}</p>
                  
                  {/* Expand indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm opacity-60">
                    <span>{isExpanded ? "접기" : "자세히 보기"}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {/* Expandable Content */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isExpanded ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-primary-foreground/10 p-8 pt-6">
                    {/* Overview (Standard) */}
                    {"overview" in plan && plan.overview && (
                      <p className="mb-6 text-sm font-medium opacity-60">
                        {plan.overview}
                      </p>
                    )}

                    {/* Features */}
                    <ul className="space-y-4">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm leading-relaxed"
                        >
                          <span className="opacity-60">-</span>
                          <span className="opacity-80">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Detailed Curriculum (Standard only) */}
                    {"curriculum" in plan && plan.curriculum && (
                      <div className="mt-8 border-t border-primary-foreground/10 pt-6">
                        <p className="mb-6 text-xs font-medium tracking-wider uppercase text-brand">
                          상세 커리큘럼
                        </p>

                        {/* Month 1 */}
                        <div className="mb-8">
                          <div className="mb-4 flex items-center gap-3">
                            <span className="bg-brand px-2.5 py-0.5 text-xs font-medium tracking-wider text-white">
                              1개월차
                            </span>
                            <span className="text-xs font-medium opacity-70">
                              {plan.curriculum.month1.label}
                            </span>
                          </div>
                          <div className="space-y-5">
                            {plan.curriculum.month1.weeks.map((week, wIdx) => (
                              <div key={wIdx} className="border-l-2 border-brand/30 pl-4">
                                <p className="mb-1 text-xs font-medium tracking-wider uppercase opacity-50">
                                  {week.week}
                                </p>
                                <p className="mb-2 text-sm font-bold opacity-90">
                                  {week.title}
                                </p>
                                <ul className="space-y-1">
                                  {week.items.map((item, iIdx) => (
                                    <li key={iIdx} className="flex items-start gap-2 text-xs leading-relaxed opacity-60">
                                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-foreground/50" />
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          {plan.curriculum.month1.note && (
                            <p className="mt-4 text-xs opacity-40">
                              {plan.curriculum.month1.note}
                            </p>
                          )}
                        </div>

                        {/* Month 2 */}
                        <div>
                          <div className="mb-4 flex items-center gap-3">
                            <span className="bg-brand px-2.5 py-0.5 text-xs font-medium tracking-wider text-white">
                              2개월차
                            </span>
                            <span className="text-xs font-medium opacity-70">
                              {plan.curriculum.month2.label}
                            </span>
                          </div>
                          <div className="border-l-2 border-brand/30 pl-4">
                            <ul className="space-y-1">
                              {plan.curriculum.month2.items.map((item, iIdx) => (
                                <li key={iIdx} className="flex items-start gap-2 text-xs leading-relaxed opacity-60">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-foreground/50" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* CTA Button */}
                    <div className="mt-8">
                      <a
                        href="http://pf.kakao.com/_lxkxjXG"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full py-4 text-center text-sm font-medium tracking-wider transition-all ${
                          plan.highlight
                            ? "bg-brand text-white hover:opacity-90"
                            : "bg-primary-foreground text-primary hover:opacity-90"
                        }`}
                      >
                        상담 신청하기
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bonus Note */}
        <div className="mt-12 border border-border bg-secondary p-8 text-center">
          <p className="mb-2 text-xs font-medium tracking-wider uppercase text-brand">
            Bonus
          </p>
          <p className="text-lg font-bold text-secondary-foreground md:text-xl">
            {"부스트 · 프리미엄 플랜 선택 시"}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {"+ 90만 원 상당 실전 AI / 비즈니스 툴 패키지 제공"}
          </p>
        </div>
      </div>
    </section>
  )
}
