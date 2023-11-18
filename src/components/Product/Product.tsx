import { Link } from "react-router-dom"
import { Container, Product } from "./product.styled"
import PrimeSvg from "../CompartiveProducts/svg/Prime"
import AmazonButton from "../Button/AmazonButton/AmazonButton"

export type ProductProps = {
  image: string
  productUrl: string
  title: string
  list: string[]
  primeUrl: string
  url: string
}

export default function (product: ProductProps) {

  const { image, productUrl, title, list, primeUrl, url } = product

  return (
    <Container>

      <Product>
        <div>
          <img src={image} alt="" width="200" height="200" />
        </div>
        <div>
          <h3 className="product-title">
            <Link to={productUrl}>
              {title}
            </Link>
          </h3>
          <p className="product-characteristic">Characteristics</p>
          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="buy-button">
            {primeUrl && <Link to={primeUrl}>
              <PrimeSvg />
            </Link>}
            <AmazonButton text="Buy in Amazon" url={url} />
          </div>
        </div>
      </Product>
    </ Container>
  )
}