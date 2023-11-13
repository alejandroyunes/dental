import { Link } from "react-router-dom"
import { SimpleButton as Button } from "./amazon.styled"

type AmazonButtonProps = {
  text: string
  url: string
  blank?: boolean
  color?: boolean
}

export default function AmazonButton({ text, url, color, blank }: AmazonButtonProps) {
  return (
    <Button>
      <Link to={url} target={blank ? '_blank' : '_self'}><span className={color ? 'color' : ''}>{text}</span></Link>
    </Button>
  )
}