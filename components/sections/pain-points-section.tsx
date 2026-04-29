export function PainPointsSection() {
  const painPoints = [
    "무엇을 올려야 할지 매번 고민하고 있어요",
    "나(우리 브랜드)만의 콘셉이 뭔지 감이 안 잡혀요",
    "콘텐츠는 꾸준히 올리고 있는데, 팔로워나 조회수가 그대로에요",
    "조회수는 나오는데, 문의나 구매로는 하나도 이어지지 않아요",
    "어떻게 콘텐츠를 수익 창출 수단으로 활용할 수 있을까요?",
  ]

  return (
    <section className="bg-background px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
          Pain Point
        </p>
        <h2 className="mb-16 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          {'지금 이런 고민'}
          <br />
          {'하고 계신가요?'}
        </h2>

        <div className="space-y-4">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-4 border-b border-border pb-4"
            >
              <span className="mt-0.5 text-xs font-medium text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
