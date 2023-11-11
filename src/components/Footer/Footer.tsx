
import { FooterContainer } from './Footer.styled'
import { Link } from "react-router-dom"

export interface FooterProps {
  title: string
  subtitle: string
  image: string
  text: string
}

export default function Footer(props: FooterProps) {

  const { title, subtitle, image, text } = props

  return (
    <FooterContainer>
      <div className="footer-left">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Link to={''}>
          <p>Privacy Policy</p>
        </Link>
        <Link to={''}>
          <p>Legal Notice</p>
        </Link>
        <Link to={''}>
          <p>Cookie Policy</p>
        </Link>
      </div>

      <div className="footer-right">

        <div className="secure">
          <img src={image} alt="secure payment" />
          <p>{text}</p>
        </div>
      </div>

    </FooterContainer>
  )
}
