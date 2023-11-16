import Title from '../Title/Title'
import { Link } from 'react-router-dom'
import { Column, Container } from './threeColumnProduct.styled'
import PrimeSvg from '../CompartiveProducts/svg/Prime'
import AmazonButton from '../Button/AmazonButton/AmazonButton'

type ItemProps = {
  title: string
  image: string
  productUrl: string
  primeUrl: string
  url: string
  list: string[]
}

type Props = {
  title: string
  subTitle: string
  moreInfo: string
  items?: ItemProps[]
}

export default function ThreeRowProduct(props: Props) {
  const { title, subTitle, moreInfo, items } = props

  return (
    <Container>
      <Title titleH2={title} message={subTitle} moreinfo={moreInfo} />

      <Column>

        {items && items.map((post, index) => (
          <div className='product' key={index}>
            <div>
              <img src={post.image} alt='' width='280' height='280' />
            </div>
            <div>
              <h3 className='product-title'>
                <Link to={post.url}>
                  {post.title}
                </Link>
              </h3>
              <p className='product-characteristic'>Characteristics</p>
              <ul>
                {post.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className='buy-button'>
                {post.primeUrl && <Link to={post.primeUrl}>
                  <PrimeSvg />
                </Link>}
                <AmazonButton text='Buy in Amazon' url='/url' />
              </div>
            </div>
          </div>
        ))}

      </Column>

    </Container>
  )
}
