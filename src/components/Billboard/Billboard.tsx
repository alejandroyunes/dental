import { BillboardProps } from "../../pages/translate/app";
import SimpleButton from "../Button/SimpleButton/SimpleButton";
import { BillboardContainer, ImageContainer } from "./billboard.styled"

export default function Billboard(props: BillboardProps) {

  const { title, subtitle, image, button, mobileImage } = props

  return (

    <ImageContainer image={image} mobileimage={mobileImage}>
      <BillboardContainer>
        <div className="title">
          <h1>
            {title}
          </h1>
          <h2>
            {subtitle}
          </h2>
          <SimpleButton text={button} />
        </div>
      </BillboardContainer>

    </ImageContainer>

  );
}
