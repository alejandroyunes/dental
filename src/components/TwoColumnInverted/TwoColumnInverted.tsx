import { Link } from 'react-router-dom'
import SimpleButton from '../Button/SimpleButton/SimpleButton'
import Title from '../Title/Title'
import { Button, Container, TwoColumn, Item } from './TwoColumnInverted.styled'

type itemProps = {
  id: number
  title: string
  text: string
  image: string
  alt: string
  url: string
}

type Props = {
  title: string
  subTitle: string
  url: string
  items: itemProps[]
}

export default function (props: Props) {
  const { title, subTitle, url, items } = props

  return (
    <Container>
      <Title titleH2={title} message={subTitle} url={{ url: url, text: 'See the three types' }} />
      <TwoColumn>
        {items.map((item) => {
          return (
            <Item key={item.id}>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
              <div className='image-items'>
                <Link to={item.url}>
                  <img src={item.image} alt={item.alt} width='320' height='200' />
                  <p>view more &rarr;</p>
                </Link>
              </div>
            </Item>
          )
        })}
      </TwoColumn>

      <Button>
        <SimpleButton url={'url'} text='Buy The Best Irrigators' color={true} />
      </Button>
    </Container>
  )
}