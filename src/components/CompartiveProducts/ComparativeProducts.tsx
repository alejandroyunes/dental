import Title from "../Title/Title"
import { Table, Container, DesktopWrapper, TableMobile } from "./comparative.styled"
import image from '../../pages/categories/best-irrigators/data/water.jpg'
import { Fragment } from "react"

type Props = {
  title: string
  message: string
}

const data = [
  {
    model: 'Waterpik Ultra 660',
    image: image,
    prime: true,
    dimensions: '15 x 16,5 x 23 cm',
    replacementHeads: 6,
    deposit: '650 ml',
    highlight: 'Economical, easy to use, and very comprehensive.',
    problem: 'The customer service of Waterpik.',
    price: 'Best buy',
    satisfaction: '5/5',
    view: 'View Price',
  },
  {
    model: 'Waterpik Ultra 660',
    image: image,
    prime: true,
    dimensions: '15 x 16,5 x 23 cm',
    replacementHeads: 6,
    deposit: '650 ml',
    highlight: 'Economical, easy to use, and very comprehensive.',
    problem: 'The customer service of Waterpik.',
    price: 'Best buy',
    satisfaction: '5/5',
    view: 'View Price',
  },
  {
    model: 'Waterpik Ultra 660',
    image: image,
    prime: true,
    dimensions: '15 x 16,5 x 23 cm',
    replacementHeads: 6,
    deposit: '650 ml',
    highlight: 'Economical, easy to use, and very comprehensive.',
    problem: 'The customer service of Waterpik.',
    price: 'Best buy',
    satisfaction: '5/5',
    view: 'View Price',
  },
  {
    model: 'Waterpik Ultra 660',
    image: image,
    prime: true,
    dimensions: '15 x 16,5 x 23 cm',
    replacementHeads: 6,
    deposit: '650 ml',
    highlight: 'Economical, easy to use, and very comprehensive.',
    problem: 'The customer service of Waterpik.',
    price: 'Best buy',
    satisfaction: '5/5',
    view: 'View Price',
  }
]

const TableInfo = () => {
  return (
    <div className="highlighted">
      <div className="grid-item">
        <p>Model</p>
      </div>

      <div className="grid-item grid-item-image-text">
        <p>Image</p>
      </div>

      <div className="grid-item">
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
    </div>
  )
}

export default function ({ title, message }: Props) {
  return (
    <Container>
      <Title titleH2={title} message={message} />
      <DesktopWrapper>
        <Table>
          <TableInfo />

          {data.map((item, index) => {
            return (
              <div key={index}>
                <div className="grid-item">
                  <p>{item.model}</p>
                </div>

                <div className="grid-item grid-item-image">
                  <img src={item.image} width={160} height={160} />
                </div>

                <div className="grid-item">
                  <p>{item.prime ? 'prime' : 'no prime'}</p>
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

              </div>
            )
          })}
        </Table>
      </DesktopWrapper >

      <TableMobile>

        {data.map((item, index) => {
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

                <div className="grid-item">
                  <p>{item.prime ? 'prime' : 'no prime'}</p>
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