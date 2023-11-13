import Title from "../Title/Title"
import { Table, Container, DesktopWrapper, TableMobile } from "./comparative.styled"
import { Fragment } from "react"
import PrimeSvg from "./svg/Prime"
import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"

type ItemProps = {
  model: string
  image: string
  prime: boolean
  dimensions: string
  replacementHeads: number
  deposit: string
  highlight: string
  problem: string
  price: string
  satisfaction: string
  view: string
  url: string
}

type Props = {
  title: string
  message: string
  primeUrl: string
  items: ItemProps[]
}

const TableInfo = () => {
  return (
    <div className="highlighted">
      <div className="grid-item">
        <p>Model</p>
      </div>

      <div className="grid-item grid-item-image-text">
        <p>Image</p>
      </div>

      <div className="grid-item grid-item-prime">
        <p>Prime</p>
      </div>

      <div className="grid-item">
        <p>Dimensions</p>
      </div>

      <div className="grid-item">
        <p>Replacement Heads</p>
      </div>

      <div className="grid-item">
        <p>Deposit</p>
      </div>

      <div className="grid-item grid-item-image-highlight">
        <p>Highlight</p>
      </div>

      <div className="grid-item grid-item-image-problem">
        <p>Problem</p>
      </div>

      <div className="grid-item">
        <p>Price</p>
      </div>

      <div className="grid-item">
        <p>User Satisfaction</p>
      </div>
      <div className="grid-item grid-item-buy">
        <p>Buy Now</p>
      </div>
    </div>
  )
}

export default function ({ title, message, items, primeUrl }: Props) {
  return (
    <Container>
      <Title titleH2={title} message={message} />
      <DesktopWrapper>
        <Table>
          <TableInfo />

          {items.map((item, index) => {
            return (
              <div key={index}>
                <div className="grid-item">
                  <p>{item.model}</p>
                </div>

                <div className="grid-item grid-item-image">
                  <img src={item.image} width={160} height={160} />
                </div>

                <div className="grid-item grid-item-prime-svg">
                  <p>{item.prime ? <Link to={primeUrl} target='_blank'><PrimeSvg /></Link> : '-'}</p>
                </div>

                <div className="grid-item">
                  <p>{item.dimensions}</p>
                </div>

                <div className="grid-item">
                  <p>{item.replacementHeads}</p>
                </div>

                <div className="grid-item">
                  <p>{item.deposit}</p>
                </div>

                <div className="grid-item grid-item-image-highlight">
                  <p>{item.highlight}</p>
                </div>

                <div className="grid-item grid-item-image-problem">
                  <p>{item.problem}</p>
                </div>

                <div className="grid-item">
                  <p>{item.price}</p>
                </div>

                <div className="grid-item">
                  <p>{item.satisfaction}</p>
                </div>

                <div className="grid-item grid-item-buy-button">
                  <AmazonButton text={item.view} url={item.url} blank={true} />
                </div>
              </div>
            )
          })}
        </Table>
      </DesktopWrapper >

      <TableMobile>

        {items.map((item, index) => {
          return (
            <Fragment key={index}>
              <TableInfo />
              <div>
                <div className="grid-item">
                  <p>{item.model}</p>
                </div>

                <div className="grid-item grid-item-image">
                  <img src={item.image} width={160} height={160} />
                </div>

                <div className="grid-item grid-item-prime-svg">
                  <p>{item.prime ? <Link to={primeUrl} target='_blank'><PrimeSvg /></Link> : '-'}</p>
                </div>

                <div className="grid-item">
                  <p>{item.dimensions}</p>
                </div>

                <div className="grid-item">
                  <p>{item.replacementHeads}</p>
                </div>

                <div className="grid-item">
                  <p>{item.deposit}</p>
                </div>

                <div className="grid-item grid-item-text">
                  <p>{item.highlight}</p>
                </div>

                <div className="grid-item grid-item-text">
                  <p>{item.problem}</p>
                </div>

                <div className="grid-item">
                  <p>{item.price}</p>
                </div>

                <div className="grid-item">
                  <p>{item.satisfaction}</p>
                </div>

              </div>
            </Fragment>

          )
        })}
      </TableMobile>
    </Container>
  )
}