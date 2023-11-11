import Title from "../Title/Title"
import { Link } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { ProAndConContainer } from "./proandcon.styled"

type itemProps = {
  id: number
  image: string
  alt: string
  title: string
  url: string
}

type Props = {
  meta: string
  title: string
  subTitle: string
  moreInfo: string
  items: itemProps[]
}

export default function (props: Props) {
  const { title, subTitle, moreInfo, items } = props
  return (
    <>
      <Title title={title} message={subTitle} moreInfo={moreInfo} />

      <ProAndConContainer>
        <div className="pros-cons-container">
          <div className="pros">
            <h2>Pros</h2>
            <ul>
              <li><span className="icon">&#10003;</span>: Lorem ipsum dolor sit amet</li>
              <li>Pro 2: Consectetur adipiscing elit</li>
              <li>Pro 3: Sed do eiusmod tempor incididunt</li>
            </ul>
          </div>

          <div className="cons">
            <h2>Cons</h2>
            <ul>
              <li><span className="icon">&#10007;</span>: Ut labore et dolore magna aliqua</li>
              <li>Con 2: Ut enim ad minim veniam</li>
              <li>Con 3: Duis aute irure dolor in reprehenderit</li>
            </ul>
          </div>
        </div>
      </ProAndConContainer>
    </>
  )
}