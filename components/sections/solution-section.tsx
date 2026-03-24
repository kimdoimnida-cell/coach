import { Check } from "lucide-react"

export function SolutionSection() {
  const brandBenefits = [
    "우리 브랜드만의 정체성이 만들어집니다",
    '더 이상 "뭘 올려야 하지?" 고민하지 않습니다',
    "타겟 고객이 누구인지, 어떻게 다가가야 하는지 명확해집니다",
    "브랜드 콘셉과 톤앤매너가 확립됩니다",
    "고객이 먼저 찾아오는 브랜드로 성장합니다",
  ]

  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
          Solution
        </p>
        <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          {'이 프로그램을 거치면,'}
          <br />
          {'브랜드가 명확해집니다'}
        </h2>
        <p className="mb-12 text-base leading-relaxed text-muted-foreground md:text-lg">
          {'SNS는 단순한 노출 플랫폼이 아니라 브랜드가 고객과 대화하고, 신뢰를 쌓고, 관계를 만드는 공간이 됩니다.'}
        </p>

        <div className="space-y-5">
          {brandBenefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center bg-brand">
                <Check className="h-3 w-3 text-white" />
              </div>
              <p className="text-base leading-relaxed text-foreground md:text-lg">
                {benefit}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-16">
          <h3 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            {'그리고 매출로도 이어집니다'}
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>
              {'브랜드 정체성이 명확해지면, 자연스럽게 전환도 따라옵니다.'}
            </p>
            <p>
              {'콘텐츠를 업로드하면 제품이 함께 판매되는 구조가 만들어지고, 단 한 편의 콘텐츠로 수천만 원의 매출이 발생하는, 브랜드의 영향력이 곧 매출이 되는 시스템이 자리 잡습니다.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
