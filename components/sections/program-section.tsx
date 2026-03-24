export function ProgramSection() {
  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
          Program
        </p>
        <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          {'어떻게 진행되나요?'}
        </h2>
        <p className="mb-16 text-base leading-relaxed text-muted-foreground md:text-lg">
          {'총 8회 · 2개월 과정 / 주 1회 · 1시간 실시간 피드백 세션'}
        </p>

        {/* Overview */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          <div className="border border-border bg-card p-8">
            <p className="mb-2 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Month 1
            </p>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              {'브랜드 전략 수립'}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {'타겟 고객 정의부터 브랜드 콘셉, 비주얼 아이덴티티, 스토리텔링, 전환 구조까지'}
            </p>
          </div>
          <div className="border border-border bg-card p-8">
            <p className="mb-2 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              Month 2
            </p>
            <h3 className="mb-3 text-xl font-bold text-card-foreground">
              {'콘텐츠 실전 피드백'}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {'실제 콘텐츠 기반 1:1 코칭으로 브랜드 구축 완성'}
            </p>
          </div>
        </div>

        {/* Bonus */}
        <div className="mb-20 border border-border bg-secondary p-8 text-center">
          <p className="mb-2 text-xs font-medium tracking-wider uppercase text-muted-foreground">
            Bonus
          </p>
          <p className="text-lg font-bold text-secondary-foreground md:text-xl">
            {'+ 90만 원 상당 추가 자료 제공'}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {'실전 AI / 비즈니스 툴 패키지'}
          </p>
        </div>
      </div>
    </section>
  )
}
