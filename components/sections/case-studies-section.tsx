"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface CaseStudy {
  category: string
  quote: string
  rows: { label: string; before: string; after: string }[]
}

const caseStudies: CaseStudy[] = [
  {
    category: "CASE 01 — 포토 브랜드",
    quote:
      "신규 브랜드라 오픈 후 1-2달은 당연히 적자를 각오하고 시작했는데 릴스 하나로 첫달부터 모든 예약이 마감됐어요",
    rows: [
      {
        label: "전략",
        before: "콘텐츠 부재",
        after: "브랜드 타겟 고객에 맞는 이벤트 콘텐츠 기획",
      },
      {
        label: "콘텐츠 퍼포먼스",
        before: "0회 (신규 SNS 채널)",
        after: "영상 2개로 100만 뷰 / 이벤트 참여자 4천 명 이상",
      },
      {
        label: "팔로워",
        before: "0",
        after: "7천 명 → 현재 1만 이상",
      },
      {
        label: "매출·전환",
        before: "0 (신규 브랜드)",
        after: "첫 달 예약 마감",
      },
    ],
  },
  {
    category: "CASE 02 — 식품 브랜드",
    quote:
      "광고비를 5억에서 5천 만원으로 줄였는데, 매출은 증가했어요. SNS 덕분입니다.",
    rows: [
      {
        label: "브랜드 컨셉",
        before: "명확한 브랜드·콘셉트 부재",
        after: "브랜드·콘텐츠 콘셉트 정립",
      },
      {
        label: "콘텐츠 퍼포먼스",
        before: "평균 조회수 500회 미만",
        after: "노출량 100배 이상 증가",
      },
      {
        label: "매출·전환",
        before: "SNS 기반 매출 거의 없음",
        after: "콘텐츠 10개로 주문 폭주 → 조기 품절 → 3억 매출 발생",
      },
    ],
  },
  {
    category: "CASE 03 — 마케팅 대행사",
    quote:
      "한 달 평균 조회수가 10만이 넘고, 신규 영업까지 성공했어요.",
    rows: [
      {
        label: "브랜드 정체성",
        before: "저조한 성과로 기존 계약 해지 · 추가 영업 어려움",
        after: "인게이지먼트 상승으로 브랜드 신뢰 회복",
      },
      {
        label: "콘텐츠 퍼포먼스",
        before: "평균 조회수 500 미만",
        after: "2주간 약 70만 조회, 공유 5,600회, 팔로워 +2,000명",
      },
      {
        label: "매출 및 전환",
        before: "신규 계약 유치 어려움",
        after: "신규 고객 유입 증가 → 사업 확장으로 이어짐",
      },
    ],
  },
]

export function CaseStudiesSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
          Case Studies
        </p>
        <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
          {'실제로 이런 변화가'}
          <br />
          {'일어났습니다'}
        </h2>
        <p className="mb-16 text-base leading-relaxed opacity-60 md:text-lg">
          {'코칭 프로그램을 거친 브랜드들의 Before & After'}
        </p>

        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <div key={index} className="border-b border-primary-foreground/20">
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="flex w-full items-center justify-between py-6 text-left"
              >
                <span className="text-sm font-medium tracking-wider md:text-base">
                  {study.category}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ${
                  openIndex === index
                    ? "grid-rows-[1fr] pb-8 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <blockquote className="mb-8 border-l-2 border-brand pl-4 text-base leading-relaxed opacity-80 italic md:text-lg">
                    {`"${study.quote}"`}
                  </blockquote>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-primary-foreground/20">
                          <th className="pb-3 pr-4 text-left text-xs font-medium tracking-wider uppercase opacity-50">
                            {'구분'}
                          </th>
                          <th className="pb-3 pr-4 text-left text-xs font-medium tracking-wider uppercase opacity-50">
                            Before
                          </th>
                          <th className="pb-3 text-left text-xs font-medium tracking-wider uppercase opacity-50">
                            After
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {study.rows.map((row, rowIndex) => (
                          <tr
                            key={rowIndex}
                            className="border-b border-primary-foreground/10"
                          >
                            <td className="py-3 pr-4 text-xs font-medium opacity-70">
                              {row.label}
                            </td>
                            <td className="py-3 pr-4 text-xs opacity-50">
                              {row.before}
                            </td>
                            <td className="py-3 text-xs font-medium">
                              {row.after}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
