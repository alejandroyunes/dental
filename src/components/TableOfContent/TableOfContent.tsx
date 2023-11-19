import { Container } from "./table.styled"
import { Link } from "react-router-dom";
type ItemProps = {
  content: string
  id: string
}

export interface TableOfContentProps {
  items: ItemProps[]
}

export default function ({ items }: TableOfContentProps) {

  return (
    <Container>
      <details>
        <summary>
          <span className="summary-title">Table of Content</span>
          <div className="summary-chevron-up">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </summary>

        {items.map((item, index) => (
          <div key={index} className="summary-content">
            <Link to={item.id}>
              {item.content}
            </Link></div>
        ))}

        <div className="summary-chevron-down">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up"><polyline points="18 15 12 9 6 15"></polyline></svg>
        </div>
      </details>

    </Container>
  )
}
