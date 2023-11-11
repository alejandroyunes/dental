import { SimpleButton as Button } from "./simple.styled"

type SimpleButtonProps = {
  text: string
  url?: string
  color?: boolean
}

const handleClick = () => {
  console.log('Hello from handleClick')
}

export default function SimpleButton({ text, url, color }: SimpleButtonProps) {
  return (
    <Button onClick={handleClick}> <a className={color ? 'color' : ''} href={url}>{text}</a></Button>
  )
}