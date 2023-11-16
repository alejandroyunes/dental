import SimpleButton from '../Button/SimpleButton/SimpleButton'
import { Billboard, Container } from './billboard.styled'
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

export interface BillboardProps {
  title: string
  titleH2: string
  subtitle: string
  image: string
  url: string
  mobileImage: string
  buttonText: string
}

export default function (props: BillboardProps) {

  const { title, subtitle, image, buttonText, mobileImage, url, titleH2 } = props

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>

      <Container image={image} mobileimage={mobileImage} >
        <Billboard>
          <div className='title'>
            <h2>{titleH2}</h2>
            <h1>{title}</h1>
            <p>
              {subtitle}
            </p>
            <SimpleButton text={buttonText} url={url} blank={false} />
          </div>
        </Billboard>

      </Container>
    </StyleSheetManager>
  )
}
