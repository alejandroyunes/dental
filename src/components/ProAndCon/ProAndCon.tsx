import SimpleButton from '../Button/SimpleButton/SimpleButton'
import { ProAndCon, ProAndConButton, Container } from './proandcon.styled'

type itemProps = {
  title: string
}

export type ProAndConsProps = {
  itemspro: itemProps[]
  itemscons: itemProps[]
  buttonUrl?: {
    url: string
    text: string
  }
}

export default function (props: ProAndConsProps) {

  const { itemspro, itemscons, buttonUrl } = props

  return (
    <Container>

      <ProAndCon>
        <div className='pros'>
          <p>Pros</p>
          <ul>
            {itemspro.map((item, index) => (
              <li key={index}><span className='icon'>&#10003;</span>{item.title}</li>
            ))}
          </ul>
        </div>

        <div className='cons'>
          <p>Cons</p>
          <ul>
            {itemscons.map((item, index) => (
              <li key={index}><span className='icon'>&#10007;</span> {item.title}</li>
            ))}
          </ul>
        </div>
      </ProAndCon>

      {buttonUrl &&
        <ProAndConButton>
          <SimpleButton url={buttonUrl.url} text={buttonUrl.text} color />
        </ProAndConButton>}
    </Container>
  )
}