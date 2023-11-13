import { Link } from "react-router-dom"
import { SimpleButton as Button } from "./amazon.styled"

type AmazonButtonProps = {
  text: string
  url: string
  blank?: boolean
}

export default function AmazonButton({ text, url, blank }: AmazonButtonProps) {
  return (
    <Button>
      <Link to={url} target={blank ? '_blank' : '_self'}><span>{text}</span></Link>
    </Button>
  )
}