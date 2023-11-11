import { Link } from 'react-router-dom';
import { TitleContainer } from './title.styled';

interface TitleProps {
  title?: string
  message?: string
  left?: boolean
  moreInfo?: string
  url?: {
    url: string
    text: string
  }
}

export default function Title({ title, message, left, moreInfo, url }: TitleProps) {

  return (
    <TitleContainer className={left ? 'left' : ''}>
      {title && <h1>{title}</h1>}
      {message && <p>{message}</p>}
      {moreInfo && <p>{moreInfo}</p>}
      {url && <Link to={url.url}><p className='url'>{url.text} &rarr;</p></Link>}
    </TitleContainer>
  )
}