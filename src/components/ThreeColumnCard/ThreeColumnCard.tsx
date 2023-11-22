import Title from '../Title/Title'
import { Link } from 'react-router-dom'
import { Column, Container } from './threeColumnCard.styled'

type itemProps = {
  id: number
  image: string
  alt: string
  title: string
  url: string
}

type Props = {
  title: string
  subTitle: string
  moreInfo: string
  columnsUrl?: string
  items: itemProps[]
}

export default function ThreeColumnCard(props: Props) {
  const { title, subTitle, moreInfo, columnsUrl, items } = props

  return (
    <Container>
      <Title titleH2={title} message={subTitle} moreinfo={moreInfo} />
      <Column>
        {items && items.map((post, i) => (
          <Link to={post.url} key={i}>
            <div className='child-card'>
              <img src={`${post.image}`} alt={post.alt} width='287' height='162' />
              <h3>{post.title}</h3>
            </div>
          </Link>
        ))}
      </Column>
      {columnsUrl && <Title url={{ url: columnsUrl, text: 'VIEW MORE' }} />}

    </Container>
  )
}
