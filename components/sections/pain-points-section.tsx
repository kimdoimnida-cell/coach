export function PainPointsSection() {
  const painPoints = [
    "광고비는 계속 느는데, 우리 브랜드 자체 채널은 없어요",
    "우리 브랜드만의 콘셉이 뭔지 감이 안 잡혀요",
    "계정은 있는데, 도대체 뭘 올려야 할지 모르겠어요",
    "콘텐츠는 꾸준히 올리는데, 왜 문의도 매출도 없을까요?",
    "조회수는 나오는데, 정작 구매로는 하나도 안 이어져요",
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
