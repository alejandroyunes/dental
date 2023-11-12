import { Container } from "./twoRowGrid.styled"

type TwoRowGridProps = {
  title: string
  subtitle: string
  image: string
  alt: string
  button: string
}

export default function TwoRowGrid(props: TwoRowGridProps) {

  const { title, subtitle, image, alt } = props

  return (
    <Container>
      <div className="title">
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        {/* <div className="contact">
          <a href="#contact">{button}</a>
        </div> */}
      </div>

      <div className="svg">
        <img src={image} alt={alt} width="530" height="542" />
      </div>

    </Container>
  );
}
