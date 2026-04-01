"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const plans = [
  {
    id: "starting",
    name: "부스트 플랜",
    subtitle: "수익화의 시작을 만드는 구조 세팅",
    price: "99만 원",
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
    name: "커스터마이징 플랜",
    subtitle: "브랜드 맞춤형 SNS 성장 시스템 구축",
    price: "360만 원",
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
    spotsLeft: "2자리 남았습니다",
  },
  {
    id: "premium",
    name: "프리미엄 플랜",
    subtitle: "매출 전환 구조 완성 및 초밀착 관리",
    price: "1,000만 원",
    spotsLeft: "1자리 남았습니다",
    features: [
      "부스트 플랜 + 커스터마이징 플랜 전체 포함",
      "3개월 매출 구조 설계 & 실행 로드맵 구축",
      "개인 브랜딩 포지셔닝 & 메시지 설계",
      "콘텐츠 → 전환 → 판매 흐름 설계",
    ],
    categories: [
      {
        title: "핵심 전략 & 시스템 구축",
        items: [
          "부스트 플랜 + 커스터마이징 플랜 전체 포함",
          "3개월 매출 구조 설계 & 실행 로드맵 구축",
          "개인 브랜딩 포지셔닝 & 메시지 설계",
          "콘텐츠 → 전환 → 판매 흐름 설계",
        ],
      },
      {
        title: "실행 & 밀착 디렉팅",
        items: [
          "3개월 콘텐츠 플랜 기획 (주차별)",
          "주 1회 밀착 피드백 & 방향 수정",
          "콘텐츠 구조 / 훅 / 메시지 직접 디렉팅",
          "업로드 전 콘텐츠 우선 검수",
        ],
      },
      {
        title: "수익화 & 확장",
        items: [
          "개인 상품 기획 및 구조 설계",
          "세일즈 흐름 & 전환 전략 구축",
          "개인 페이지(프로필/랜딩) 설계",
        ],
      },
      {
        title: "운영 지원 & 환경 세팅",
        items: [
          "24시간 커뮤니케이션 지원",
          "실행 중 발생하는 문제 실시간 대응",
          "지속 가능한 콘텐츠 운영 시스템 정착",
        ],
      },
      {
        title: "프리미엄 혜택",
        items: [
          "프리미엄 네트워킹 우선 초대",
          "고급 인사이트 및 확장 기회 제공",
        ],
      },
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
    <section className="bg-primary px-6 py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
            Pricing Plans
          </p>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            {"나에게 맞는 플랜 선택하기"}
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed opacity-60">
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
                className={`relative flex flex-col overflow-hidden rounded-2xl transition-all shadow-xl ${
                  plan.highlight
                    ? "bg-white text-slate-900 ring-2 ring-brand"
                    : "bg-white text-slate-900"
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
                  
                  {/* Spots Left Urgent Message */}
                  {"spotsLeft" in plan && (
                    <div className="mb-2 flex items-center gap-1.5 text-sm font-bold text-red-500">
                      <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
                      {plan.spotsLeft}
                    </div>
                  )}

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
                  <div className="border-t border-slate-200 p-8 pt-6">
                    {/* Overview (Standard) */}
                    {"overview" in plan && plan.overview && (
                      <p className="mb-6 text-sm font-medium opacity-60">
                        {plan.overview}
                      </p>
                    )}

                    {/* Standard/Boost Features List (Hidden if categories exist for Premium) */}
                    {!("categories" in plan) && (
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
                    )}

                    {/* Premium Categories rendering */}
                    {"categories" in plan && plan.categories && (
                      <div className="space-y-8">
                        {(plan.categories as any[]).map((category, cIdx) => (
                          <div key={cIdx} className="space-y-3">
                            <div className="flex items-center gap-2">
                              <h4 className="text-sm font-bold opacity-90">{category.title}</h4>
                            </div>
                            <ul className="space-y-1.5 pl-7">
                              {category.items.map((item: string, iIdx: number) => (
                                <li key={iIdx} className="flex items-start gap-2 text-xs leading-relaxed opacity-60">
                                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-foreground/50" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Detailed Curriculum (Standard only) */}
                    {"curriculum" in plan && plan.curriculum && (
                      <div className="mt-8 border-t border-slate-200 pt-6">
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
                          className={`block w-full py-4 text-center text-sm font-medium tracking-wider transition-all rounded-lg ${
                            plan.highlight
                              ? "bg-brand text-white hover:opacity-90"
                              : "bg-slate-900 text-white hover:bg-slate-800"
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
        <div className="mt-12 border border-primary-foreground/10 bg-primary-foreground/5 p-8 text-center">
          <p className="mb-2 text-xs font-medium tracking-wider uppercase text-brand">
            Bonus
          </p>
          <p className="text-lg font-bold md:text-xl">
            {"커스터마이징 · 프리미엄 플랜 선택 시"}
          </p>
          <p className="mt-2 text-sm opacity-60">
            {"+ 90만 원 상당 실전 AI / 비즈니스 툴 패키지 제공"}
          </p>
        </div>
      </div>
    </section>
  )
}
