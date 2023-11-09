import { SimpleButton as Button } from "./simple.styled"

type SimpleButtonProps = {
  text: string
  url?: string
}

const handleClick = () => {
  console.log('Hello from handleClick')
}

export default function SimpleButton({ text, url }: SimpleButtonProps) {
  return (
    <Button onClick={handleClick}> <a href={url}>{text}</a></Button>
  )
}