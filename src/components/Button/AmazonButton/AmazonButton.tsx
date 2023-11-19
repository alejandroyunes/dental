import { Link } from "react-router-dom"
import { Container, Button } from "./amazon.styled"

type AmazonButtonProps = {
  text: string
  url: string
  blank?: boolean
}

export default function ({ text, url, blank }: AmazonButtonProps) {
  return (
    <Container>
      <Button>
        <Link to={url} target={blank ? '_blank' : '_self'}><span>{text}</span></Link>
      </Button>
    </Container>
  )
}