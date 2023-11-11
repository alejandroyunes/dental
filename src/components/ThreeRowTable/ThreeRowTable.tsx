import Title from "../Title/Title"
import { Link } from "react-router-dom"
import { ThreeRow, Container } from "./threeRowTable.styled"

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
  items: itemProps[]
}

export default function ThreeRowTable(props: Props) {

  const { title, subTitle, moreInfo, items } = props

  return (
    <>

      <Container>
        <Title title={title} message={subTitle} moreInfo={moreInfo} />

        <ThreeRow>

          {items && items.map((post, i) => (
            <Link to={`/highlighted/${post.id}`} key={i}>
              <div className="child-card">
                <img src={`${post.image}`} alt={post.alt} width="287" height="162" />
                <h2>{post.title}</h2>
              </div>
            </Link>
          ))}
        </ThreeRow>
        <Title url={{ url: 'viewmore', text: 'view more' }} />

      </Container>
    </>
  )
}
