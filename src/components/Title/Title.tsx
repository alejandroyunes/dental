import { Link } from 'react-router-dom';
import { TitleContainer } from './title.styled';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'
interface TitleProps {
  id?: string
  title?: string
  titleH2?: string
  message?: string
  left?: boolean
  moreinfo?: string
  url?: {
    url: string
    text: string
  }
}

export default function Title({ title, message, left, moreinfo, url, titleH2, id }: TitleProps) {

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>

      <TitleContainer className={left ? 'left' : ''} id={id}>
        {title && <h1>{title}</h1>}
        {titleH2 && <h2>{titleH2}</h2>}
        {message && <p>{message}</p>}
        {moreinfo && <p>{moreinfo}</p>}
        {url && <Link to={url.url}>
          <p className='url'>
            {url.text} &rarr;
          </p>
        </Link>}
      </TitleContainer>
    </StyleSheetManager>
  )
}