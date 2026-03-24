export function ProblemSection() {
  return (
    <section className="bg-secondary px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 space-y-6">
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {'어느 상황이든, 결국 문제는 하나입니다.'}
          </p>
          <h2 className="text-2xl font-bold leading-tight text-foreground md:text-4xl">
            {'브랜드 SNS가 매출을 만드는 구조로'}
            <br />
            {'설계되어 있지 않다는 것.'}
          </h2>
        </div>

        <div className="space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            {'광고비 의존도는 점점 높아지고, 퍼포먼스 마케팅 효율은 계속 떨어지는데, 정작 브랜드만의 색깔과 목소리는 만들어지지 않으니 방향성도 확신도 점점 흐려지고 계신가요?'}
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <p className="mb-4 text-base text-muted-foreground md:text-lg">
            {'이대로 가다간, 결국 광고비만 늘고 브랜드 정체성은 희미해집니다.'}
          </p>
          <p className="text-xl font-bold text-foreground md:text-2xl">
            {'하지만 이건 당신의 문제가 아닙니다.'}
          </p>
          <p className="mt-2 text-xl font-bold text-foreground md:text-2xl">
            {"단지 '팔리는 SNS 구조'를 모를 뿐입니다."}
          </p>
        </div>
      </div>
    </section>
  )
}
