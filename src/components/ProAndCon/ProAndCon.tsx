import SimpleButton from "../Button/SimpleButton/SimpleButton"
import Title from "../Title/Title"
import { ProAndCon, ProAndConButton, ProAndConContainer } from "./proandcon.styled"

type itemProps = {
  title: string
}

type Props = {
  title: string
  subTitle: string
  moreInfo: string
  url: string
  itemsPro: itemProps[]
  itemsCons: itemProps[]
}

export default function (props: Props) {
  const { title, subTitle, moreInfo, url, itemsPro, itemsCons } = props
  return (
    <>
      <Title title={title} message={subTitle} moreInfo={moreInfo} url={{ url: url, text: "To what purpose it serves, and to what it does not." }} />

      <ProAndConContainer>
        <ProAndCon>
          <div className="pros">
            <h2>Pros</h2>
            <ul>
              {itemsPro.map((item, index) => (
                <li key={index}><span className="icon">&#10003;</span> {item.title}</li>
              ))}
            </ul>
          </div>

          <div className="cons">
            <h2>Cons</h2>
            <ul>
              {itemsCons.map((item, index) => (
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