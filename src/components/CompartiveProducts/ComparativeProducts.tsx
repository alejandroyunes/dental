import Title from "../Title/Title"
import { Container } from "./comparative.styled"

type Props = {
  title: string
  message: string
}
export default function ({ title, message }: Props) {
  return (
    <Container>
      <Title titleH2={title} message={message} />
    </Container>
  )
}