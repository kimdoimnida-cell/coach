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
            {'지금 당신의 콘텐츠는 ‘전략’이 아니라 ‘반복’으로 만들어지고 있습니다.'}
          </p>
          <p>
            {'그래서 올리긴 하는데 방향이 없고'}
            <br />
            {'조회수는 나오는데 전환이 없고'}
            <br />
            {'시간은 쓰는데 결과가 없습니다'}
          </p>
        </div>

        <div className="mt-16 border-t border-border pt-16">
          <p className="text-xl font-bold leading-relaxed text-foreground md:text-2xl">
            {'이대로라면 쌓이는 콘텐츠만큼'}
            <br />
            {'브랜드 이미지는 소모되어 갑니다.'}
          </p>
        </div>
      </div>
    </section>
  )
}
