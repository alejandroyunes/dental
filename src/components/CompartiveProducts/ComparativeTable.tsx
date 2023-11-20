import { Container, ContentSliderWrapper, DesktopWrapper, MobileWrapper, NextButton, PrevButton, Slide, SliderWrapper, Table } from "./comparative-table.styled"
import PrimeSvg from "./svg/Prime"
import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"
import { useState } from "react"
import { StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'

type ItemProps = {
  id: number
  models: string
  image: string
  alt: string
  prime: boolean
  dimensions: string
  multifunctionaltips: string
  capacity: string
  highlight: string
  problem: string
  price: string
  satisfaction: string
  view: string
  url: string
  [key: string]: string | boolean | number
}

interface ComparativeTableProps {
  items: ItemProps[]
  primeUrl: string
}

export default function ({ items, primeUrl }: ComparativeTableProps) {

  const columns = [
    'Models',
    'Image',
    'Prime',
    'Dimensions',
    'Multifunctional Tips',
    'Capacity',
    'Highlight',
    'Problem',
    'Price',
    'Satisfaction',
    'View More'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <Container>
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
                          column === 'Multifunctional Tips' ?
                            product.multifunctionaltips
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
              totalSlides={items.length}
              style={{ transform: `translateX(-${currentIndex * (100 / items.length)}%)` }}>
              {items.map((slide) => (
                <Slide key={slide.id}>
                  <Table>
                    <tbody>
                      {columns.map((column, i) => (
                        <tr key={i}>
                          <td>{column}</td>
                          <td>
                            {column === 'Image' ? <img src={slide.image} alt="Image" />
                              : column === 'Prime' ?
                                slide.prime ?
                                  <Link to={primeUrl} target="_blank"><PrimeSvg /></Link> : '-'
                                :
                                column === 'Multifunctional Tips' ? slide.multifunctionaltips :
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
  )
}