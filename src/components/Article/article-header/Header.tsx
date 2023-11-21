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
  externalUrl?: boolean
}

export default function (props: ArticleHeaderProps) {
  const { image, mobileImage, date, title, subtitle, text, url, buttonText, externalUrl } = props

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <Container image={image} mobileimage={mobileImage}>
        <Header>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{text}</p>
          <SimpleButton text={buttonText} url={url} blank={externalUrl ? true : false} />
          {date && <p className="last-updated">Last updated: {date}</p>}
        </Header>
      </Container>
    </StyleSheetManager>
  )
}
