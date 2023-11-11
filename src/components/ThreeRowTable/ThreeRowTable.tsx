import Title from "../Title/Title"
import { Link } from "react-router-dom"
import { ThreeRowTableContainer } from "./threeRowTable.styled"
import { Helmet, HelmetProvider } from "react-helmet-async"

type itemProps = {
  id: number
  image: string
  alt: string
  title: string
  url: string
}

type Props = {
  meta: string
  title: string
  subTitle: string
  moreInfo: string
  items: itemProps[]
}

export default function ThreeRowTable(props: Props) {

  const { meta, title, subTitle, moreInfo, items } = props

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={meta} />
        </Helmet>
      </HelmetProvider>

      <Title title={title} message={subTitle} moreInfo={moreInfo} />

      <ThreeRowTableContainer>
        {items && items.map((post, i) => (
          <Link to={`/highlighted/${post.id}`} key={i}>
            <div className="child-card">
              <img src={`${post.image}`} alt={post.alt} width="287" height="162" />
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </ThreeRowTableContainer>
      <Title url={{ url: 'viewmore', text: 'view more' }} />
    </>
  )
}
