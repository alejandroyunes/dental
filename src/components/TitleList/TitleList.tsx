import { Link } from 'react-router-dom';
import { TitleContainer } from './titlelist.styled';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'

interface TitleProps {
  title?: string
  titleH2?: string
  message?: string
  left?: boolean
  moreinfo?: string
  url?: {
    url: string
    text: string
  }
  items: string[]
}

export default function TitleList({ title, message, left, moreinfo, url, titleH2, items }: TitleProps) {

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>

      <TitleContainer className={left ? 'left' : ''}>
        {title && <h1>{title}</h1>}
        {titleH2 && <h2>{titleH2}</h2>}
        {message && <p>{message}</p>}
        <ul>
          {items.map((listProps, i) => (
            <li key={i}>{listProps}</li>
          ))}
        </ul>
        {moreinfo && <p>{moreinfo}</p>}
        {url && <Link to={url.url}><p className='url'>{url.text} &rarr;</p></Link>}
      </TitleContainer>
    </StyleSheetManager>
  )
}