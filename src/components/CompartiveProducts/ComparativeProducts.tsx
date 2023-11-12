import Title from "../Title/Title"
import { Comparative, Container } from "./comparative.styled"
import image from '../../pages/categories/best-irrigators/data/water.jpg'

type Props = {
  title: string
  message: string
}

const data = [
  {
    model: 'Waterpik Ultra 660',
    image: image,
    prime: true,
    dimenstions: '15 x 16,5 x 23 cm',
    replacementHeads: 6,
    deposit: '650 ml',
    highlight: 'Economical, easy to use, and very comprehensive.',
    problem: 'The customer service of Waterpik.',
    price: 'Best buy',
    satisfaction: '5/5',
    view: 'View Price',
  }
]

export default function ({ title, message }: Props) {
  return (
    <Container>
      <Title titleH2={title} message={message} />
      <Comparative>
        {data.map((item, index) => {
          return (
            <>
              <div>
                <div className="grid-item">
                  <p>Model</p>
                </div>

                <div className="grid-item">
                  <p>Image</p>
                </div>

              </div>

              <div>
                <div className="grid-item">
                  <p>{item.model}</p>
                </div>

                <div className="grid-item">
                  <img src={item.image} />
                </div>
              </div>



              {/* <p className="grid-item">Imagen</p>
                <p className="grid-item">Prime</p>
                <p className="grid-item">Dimensions</p>
                <p className="grid-item">Replacement heads</p>
                <p className="grid-item">Capacity</p>
                <p className="grid-item">Highlight</p>
                <p className="grid-item">Problem</p>
                <p className="grid-item">Price</p>
                <p className="grid-item">Satisfaction</p> */}

            </>
          )
        })}
      </ Comparative>
    </Container>
  )
}