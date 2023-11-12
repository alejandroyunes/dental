import SimpleButton from "../Button/SimpleButton/SimpleButton"
import Title from "../Title/Title"
import { ProAndCon, ProAndConButton, ProAndConContainer } from "./proandconponent.styled"

type itemProps = {
  title: string
}

type Props = {
  title: string
  subtitle: string
  moreinfo: string
  url: string
  itemspro: itemProps[]
  itemscons: itemProps[]
}

export default function ProAndConComponent(props: Props) {
  const { title, subtitle, moreinfo, url, itemspro, itemscons } = props
  return (
    <>
      <Title titleH2={title} message={subtitle} moreinfo={moreinfo} url={{ url: url, text: "To what purpose it serves, and to what it does not." }} />

      <ProAndConContainer>
        <ProAndCon>
          <div className="pros">
            <h2>Pros</h2>
            <ul>
              {itemspro.map((item, index) => (
                <li key={index}><span className="icon">&#10003;</span> {item.title}</li>
              ))}
            </ul>
          </div>

          <div className="cons">
            <h2>Cons</h2>
            <ul>
              {itemscons.map((item, index) => (
                <li key={index}><span className="icon">&#10007;</span> {item.title}</li>
              ))}
            </ul>
          </div>
        </ProAndCon>
        <ProAndConButton>
          <SimpleButton url={'url'} text="best irrigators" color={true} />
        </ProAndConButton>
      </ProAndConContainer>
    </>
  )
}