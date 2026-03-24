export function CurriculumSection() {
  const month1Weeks = [
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
        '계정 전체를 "관계 맺고 싶은 브랜드"로 만드는 구조',
        "링크 트리·랜딩 페이지 구성",
        "하이라이트(브랜드 소개/제품/후기/비하인드) 설계",
        "DM/스토리 활용 전략 및 CTA 구조",
      ],
    },
  ]

  const month2 = {
    title: "콘텐츠 실행 & 브랜드 구축 완성",
    items: [
      "수립한 브랜드 콘셉과 전략을 실제 콘텐츠로 구현",
      "매주 업로드한 콘텐츠를 기반으로 1:1 실시간 코칭",
      "브랜드 정체성이 잘 드러나는지, 타겟 고객과 잘 연결되는지 점검",
      "톤앤매너·스토리 구조·메시지 전달력까지 세밀한 피드백",
      "필요 시 콘셉 조정, 브랜드 메시지 보완, 콘텐츠 방향성 재설정",
      "고객과의 접점 강화 및 전환 포인트 최적화",
    ],
  }

  return (
    <section className="bg-secondary px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm font-medium tracking-[0.2em] uppercase text-brand">
          Curriculum
        </p>
        <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
          {'상세 커리큘럼'}
        </h2>
        <p className="mb-16 text-sm leading-relaxed text-muted-foreground">
          {'아래 내용은 큰 틀에서의 진행 과정이며, 브랜드 상황에 맞춰 유연하게 조정됩니다.'}
        </p>

        {/* Month 1 */}
        <div className="mb-16">
          <div className="mb-8 flex items-center gap-4">
            <span className="inline-block bg-brand px-3 py-1 text-xs font-medium tracking-wider text-white uppercase">
              1개월차
            </span>
            <span className="text-sm font-medium text-foreground">
              {'브랜드 정체성과 SNS 전략 수립'}
            </span>
          </div>

          <div className="space-y-8">
            {month1Weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="border-l-2 border-brand/30 pl-6">
                <p className="mb-2 text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  {week.week}
                </p>
                <h4 className="mb-4 text-lg font-bold text-foreground">
                  {week.title}
                </h4>
                <ul className="space-y-2">
                  {week.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            {'* 1개월 차는 메인 코칭 진행 후, 잔여 시간 내에서 콘텐츠 피드백도 함께 진행됩니다.'}
          </p>
        </div>

        {/* Month 2 */}
        <div>
          <div className="mb-8 flex items-center gap-4">
            <span className="inline-block bg-brand px-3 py-1 text-xs font-medium tracking-wider text-white uppercase">
              2개월차
            </span>
            <span className="text-sm font-medium text-foreground">
              {month2.title}
            </span>
          </div>

          <div className="border-l-2 border-brand/30 pl-6">
            <p className="mb-4 text-xs font-medium tracking-wider uppercase text-muted-foreground">
              {'실전 중심 4주'}
            </p>
            <ul className="space-y-2">
              {month2.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-sm leading-relaxed text-foreground">
            {'브랜드가 고객에게 명확하게 인식되고, SNS가 브랜드의 핵심 자산으로 기능하도록 완성합니다.'}
          </p>
        </div>
      </div>
    </section>
  )
}
