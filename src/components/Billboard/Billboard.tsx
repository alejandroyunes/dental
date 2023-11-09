import { BillboardProps } from "../../pages/translate/app";
import { BillboardContainer } from "./billboard.styled"

export default function Billboard(props: BillboardProps) {

  const { title, subtitle, image, button, mobileImage } = props

  return (
    <BillboardContainer image={image} mobileImage={mobileImage}>
      <div className="title">
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <div className="contact">
          <a href="#contact">{button}</a>
        </div>
      </div>
    </BillboardContainer>
  );
}
