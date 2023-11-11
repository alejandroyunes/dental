import { Container, Legal } from "./legal.styled"

type ItemProps = {
  sentence: string
  sentence2?: string
  sentence3?: string
}

type LegalProps = {
  title: string
  items: ItemProps[]
}

export default function (props: LegalProps) {
  const { title, items } = props
  return (
    <Container>
      <Legal>
        <h1>{title}</h1>
        {
          items.map((item, index) => (
            <p key={index}>{item.sentence}</p>
          ))
        }
      </Legal>
    </Container>
  )
}