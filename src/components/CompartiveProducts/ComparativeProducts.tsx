import Title from "../Title/Title"
import { Container, ContentSliderWrapper, DesktopWrapper, MobileWrapper, NextButton, PrevButton, Slide, SliderWrapper, Table } from "./comparative.styled"
import PrimeSvg from "./svg/Prime"
import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"
import { useRef, useState } from "react"
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

type ItemProps = {
  id: number
  models: string
  image: string
  alt: string
  prime: boolean
  dimensions: string
  replacementheads: string
  capacity: string
  highlight: string
  problem: string
  price: string
  satisfaction: string
  view: string
  url: string
  [key: string]: string | boolean | number
}

type Props = {
  title?: string
  message?: string
  primeUrl: string
  items: ItemProps[]
}

export default function ({ title, message, items, primeUrl }: Props) {

  const columns = [
    'Models',
    'Image',
    'Prime',
    'Dimensions',
    'Replacement Heads',
    'Capacity',
    'Highlight',
    'Problem',
    'Price',
    'Satisfaction',
    'View More'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [startX, setStartX] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const sliderRef = useRef(null)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    if (Math.abs(diff) > 50) {
      e.preventDefault()
    }

    if (diff > 0) {
      handleNext()
    } else if (diff < 0) {
      handlePrev()
    }

    setIsSwiping(false)
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
  }

  return (
    <>
      <Container>
        <Title titleH2={title} message={message} />
        <DesktopWrapper>
          <Table>
            <tbody>
              {columns.map((column, index) => (
                <tr key={index}>
                  <th>{column}</th>
                  {items.map((product, productIndex) => (
                    <td key={productIndex}>
                      {column === 'Image' && product.image ?
                        <img src={product.image} alt={product.alt} />
                        : column === 'Prime' ?
                          product.prime ? <Link to={primeUrl} target="_blank"><PrimeSvg /></Link> : '-'
                          : column === 'View' ?
                            product.view ? <AmazonButton text={'View Price'} url={product.url} blank={true} /> : 'No'
                            :
                            column === 'Replacement Heads' ?
                              product.replacementheads
                              :
                              column === 'View More' ?
                                product.view ? <AmazonButton text={'View Price'} url={product.url} blank={true} /> : 'No' :
                                product[column.toLowerCase()]
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        </DesktopWrapper >


        <MobileWrapper>
          <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>

            <ContentSliderWrapper>
              <SliderWrapper
                ref={sliderRef}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                totalSlides={items.length}
                style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}>
                {items.map((slide) => (
                  <Slide key={slide.id}>
                    <Table>
                      <tbody>
                        {columns.map((column, i) => (
                          <tr key={i}>
                            <td className="title">{column}</td>
                            <td>
                              {column === 'Image' ? <img src={slide.image} alt="Image" width={160} height={160} />
                                : column === 'Prime' ?
                                  slide.prime ?
                                    <Link to={primeUrl} target="_blank"><PrimeSvg /></Link> : '-'
                                  :
                                  column === 'Replacement Heads' ? slide.replacementheads :
                                    column === 'View More' ?
                                      slide.view ? <AmazonButton text={'View Price'} url={slide.url} blank={true} /> : 'No' :
                                      slide[column.toLowerCase()]
                              }
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Slide>
                ))}
              </SliderWrapper>
              <PrevButton onClick={handlePrev}>&lt;</PrevButton>
              <NextButton onClick={handleNext}>&gt;</NextButton>
            </ContentSliderWrapper>

          </StyleSheetManager>
        </MobileWrapper>
      </Container>
    </>
  )
}