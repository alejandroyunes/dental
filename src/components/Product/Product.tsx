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
  description?: string
}

export default function (product: ProductProps) {

  const { image, productUrl, title, list, primeUrl, description } = product

  return (
    <Container>

      <Product>
        <div>
          <Link to={productUrl} target="_blank">
            <img src={image} alt="" width="248" height="140" />
          </Link>
        </div>

        <div>
          <h3 className="product-title">
            <Link to={productUrl} target="_blank">
              {title}
            </Link>
          </h3>
          {description && <p>{description}</p>}
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
            <AmazonButton text="Buy in Amazon" url={productUrl} blank />
          </div>
        </div>
      </Product>
    </ Container >
  )
}