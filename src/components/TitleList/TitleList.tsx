import { Link } from 'react-router-dom';
import { TitleContainer } from './titlelist.styled';
import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid'
import React from 'react'

interface TitleContent {
  itemTitle: string[]
  itemContent: string[]
}

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
  items: TitleContent[]
}

export default function ({ title, message, left, moreinfo, url, titleH2, items, id }: TitleProps) {

  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>

      <TitleContainer className={left ? 'left' : ''} id={id}>
        {title && <h1>{title}</h1>}
        {titleH2 && <h2>{titleH2}</h2>}
        {message && <p>{message}</p>}
        <ul>
          {items.map((item, i) => (
            <React.Fragment key={i}>
              {item.itemTitle.map((title, index) => (
                <li key={index}>
                  <span>{title} </span>
                  {item.itemContent[index]}
                </li>
              ))}
            </React.Fragment>
          ))}
        </ul>
        {moreinfo && <p>{moreinfo}</p>}
        {url && <Link to={url.url}><p className='url'>{url.text} &rarr;</p></Link>}
      </TitleContainer>
    </StyleSheetManager>
  )
}