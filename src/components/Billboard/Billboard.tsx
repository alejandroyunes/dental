import { BillboardProps } from "../../pages/translate/app";
import { BillboardContainer } from "./billboard.styled"


export default function Billboard(props: BillboardProps) {

  const { title, subtitle, image, alt } = props

  return (
    <BillboardContainer image={image} >
      <div className="billboard-title">
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <div className="billboard-contact">
          <a href="#contact">button</a>
        </div>
      </div>
    </BillboardContainer>
  );
}
