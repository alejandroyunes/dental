import Title from "../Title/Title"
import { Link } from "react-router-dom"
import { ThreeRowTableContainer } from "./threeRowTable.styled"
import { Helmet, HelmetProvider } from "react-helmet-async"

type itemProps = {
  image: string
  alt: string
  title: string
  url: string
}

type Props = {
  meta: string
  title: string
  subTitle: string
  items: itemProps[]
}

export default function ThreeRowTable(props: Props) {

  const { meta, title, subTitle, items } = props


  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={meta} />
        </Helmet>
      </HelmetProvider>

      <Title title={title} message={subTitle} />

      <ThreeRowTableContainer>
        {items && items.map((post, i) => (
          <Link to={`${post.url}`} key={i}>
            <div className="child-card">
              <img src={`${post.image}`} alt={post.alt} width="372" height="210" />
              <h2>{post.title}</h2>
            </div>
          </Link>
        ))}
      </ThreeRowTableContainer>
    </>
  )
}
