import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"
import { Button, Container, Product } from "./product.styled"
import PrimeSvg from "../CompartiveProducts/svg/Prime"
import SimpleButton from "../Button/SimpleButton/SimpleButton"
import Title from "../Title/Title"
import ProAndConComponent, { ProAndConsProps } from "../ProAndCon/ProAndConComponent"

type ProductDetails = {
  title: string
  message: string
  moreinfo: string
}

type ProductProps = {
  items: {
    title: string
    image: string
    productUrl: string
    primeUrl: string
    url?: string
    list: string[]
    productDetails: ProductDetails
    proAndCons: ProAndConsProps
  }
}

export default function ({ items }: ProductProps) {
  return (
    <Container>

      <ProAndConComponent {...items.proAndCons} />

      <Product>
        <div>
          <img src={items.image} alt="" width="200" height="200" />
        </div>
        <div>
          <h3 className="product-title">
            <Link to={items.productUrl}>
              {items.title}
            </Link>
          </h3>
          <p className="product-characteristic">Characteristics</p>
          <ul>
            {items.list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="buy-button">
            {items.primeUrl && <Link to={items.primeUrl}>
              <PrimeSvg />
            </Link>}
            <AmazonButton text="Buy in Amazon" url="/url" />
          </div>
        </div>
      </Product>

      <Title {...items.productDetails} />

      <Button>
        <SimpleButton url={'url'} text="Buy Water Pick" color={true} blank={true} />
      </Button>

      {items.url && <Link to={'url.url'}><p className='url'>{'url.text'} &rarr;</p></Link>}

    </ Container>
  )
}