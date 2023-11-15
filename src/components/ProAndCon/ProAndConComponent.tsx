import SimpleButton from "../Button/SimpleButton/SimpleButton"
import Title from "../Title/Title"
import { ProAndCon, ProAndConButton, ProAndConContainer } from "./proandconponent.styled"

type itemProps = {
  title: string
}

export type ProAndConsProps = {
  title: string
  subtitle?: string
  moreinfo?: string
  buttonUrl?: {
    url: string
    text: string
  }
  url: {
    url: string
    text: string
  }
  itemspro: itemProps[]
  itemscons: itemProps[]
}

export default function ProAndConComponent(props: ProAndConsProps) {
  const { title, subtitle, moreinfo, url, itemspro, itemscons, buttonUrl } = props
  return (
    <>
      <Title titleH2={title} message={subtitle} moreinfo={moreinfo} url={{ url: url.url, text: url.text }} />

      <ProAndConContainer>
        <ProAndCon>
          <div className="pros">
            <p>Pros</p>
            <ul>
              {itemspro.map((item, index) => (
                <li key={index}><span className="icon">&#10003;</span> {item.title}</li>
              ))}
            </ul>
          </div>

          <div className="cons">
            <p>Cons</p>
            <ul>
              {itemscons.map((item, index) => (
                <li key={index}><span className="icon">&#10007;</span> {item.title}</li>
              ))}
            </ul>
          </div>
        </ProAndCon>
        {buttonUrl && <ProAndConButton>
          <SimpleButton url={buttonUrl.url} text={buttonUrl.text} color />
        </ProAndConButton>}
      </ProAndConContainer>
    </>
  )
}