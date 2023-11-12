import SimpleButton from "../Button/SimpleButton/SimpleButton"
import { BillboardContainer, ImageContainer } from "./billboard.styled"
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

export default function Billboard(props: BillboardProps) {

  const { title, subtitle, image, buttonText, mobileImage, url, titleH2 } = props

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>

      <ImageContainer image={image} mobileimage={mobileImage} >
        <BillboardContainer>
          <div className="title">
            <h2>{titleH2}</h2>
            <h1>{title}</h1>
            <p>
              {subtitle}
            </p>
            <SimpleButton text={buttonText} color url={url} blank={false} />
          </div>
        </BillboardContainer>

      </ImageContainer>
    </StyleSheetManager>
  );
}
