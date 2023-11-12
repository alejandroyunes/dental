
import { FooterContainer } from './Footer.styled'
import { Link } from "react-router-dom"

export interface FooterProps {
  title: string
  subtitle: string
  image: string
  text: string
  policy: string
  notice: string
  cookie: string
}

export default function Footer(props: FooterProps) {
  const { title, subtitle, image, text, policy, notice, cookie } = props

  return (
    <FooterContainer>
      <div className="footer-left">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <Link to={policy}>
          <p>Privacy Policy</p>
        </Link>
        <Link to={notice}>
          <p>Legal Notice</p>
        </Link>
        <Link to={cookie}>
          <p>Cookie Policy</p>
        </Link>
      </div>

      <div className="footer-right">
        <div className="secure">
          <p>Secure Payment through Amazon</p>
          <img src={image} alt="secure payment" width={362} height={62} />
          <p>{text}</p>
        </div>
      </div>

    </FooterContainer>
  )
}
