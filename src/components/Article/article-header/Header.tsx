import { Container, Header } from "./header.styled"
import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'
import SimpleButton from "../../Button/SimpleButton/SimpleButton"

export interface ArticleHeaderProps {
  title: string
  subtitle: string
  image: string
  mobileImage: string
  url: string
  buttonText: string
  text: string
  date?: string
}

export default function (props: ArticleHeaderProps) {
  const { image, mobileImage, date, title, subtitle, text, url, buttonText } = props

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Container image={image} mobileimage={mobileImage}>
        <Header>
          <h3>{title}</h3>
          <h1>{subtitle}</h1>
          <p>{text}</p>
          <SimpleButton text={buttonText} color url={url} />
          {date && <p className="last-updated">Last updated: {date}</p>}
        </Header>
      </Container>
    </StyleSheetManager>
  )
}
