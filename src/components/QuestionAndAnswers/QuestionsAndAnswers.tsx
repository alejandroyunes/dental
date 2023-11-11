import { Container, DetailsContainer } from "./questionsAndAnswers.styled"

type ItemProps = {
  question: string
  answer: string
}

type QuestionsProps = {
  title: string
  items: ItemProps[]
}

export default function (props: QuestionsProps) {
  const { title, items } = props

  return (
    <Container>
      <h2>{title}</h2>
      <DetailsContainer>
        {items.map((item, index) => {
          return (
            <details key={index}>
              <summary>
                <span className="summary-title">{item.question}</span>
                <div className="summary-chevron-up">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
                </div>
              </summary>

              <div className="summary-content">{item.answer}</div>
              <div className="summary-chevron-down">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
              </div>
            </details>
          )
        })}
      </DetailsContainer>
    </Container>
  )
}