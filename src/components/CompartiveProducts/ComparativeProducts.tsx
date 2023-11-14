import Title from "../Title/Title"
import { AdditionalContainerStyles, Container, ContentSliderWrapper, DesktopWrapper, MobileWrapper, NextButton, PrevButton, Slide, SliderWrapper, Table } from "./comparative.styled"
import PrimeSvg from "./svg/Prime"
import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"
import { useState } from "react"
import Slider from 'react-slick';
type ItemProps = {
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
  title: string
  message: string
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

  const slides = [
    { id: 1, title: 'Slide 1', content: 'Content for Slide 1' },
    { id: 2, title: 'Slide 2', content: 'Content for Slide 2' },
    { id: 3, title: 'Slide 3', content: 'Content for Slide 3' },
    { id: 4, title: 'Slide 4', content: 'Content for Slide 4' },
    { id: 5, title: 'Slide 5', content: 'Content for Slide 5' },
  ]


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

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
          <Table>
            {items.map((item, index) => (
              <tbody key={index}>
                {columns.map((column, i) => (
                  <tr key={i}>
                    <td className="title">{column}</td>
                    <td>
                      {column === 'Image' ? <img src={item.image} alt="Image" width={160} height={160} />
                        : column === 'Prime' ?
                          item.prime ?
                            <Link to={item.view} target="_blank"><PrimeSvg /></Link> : '-'
                          :
                          column === 'Replacement Heads' ? item.replacementheads :
                            item[column.toLowerCase()]
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            ))}
          </Table>
        </MobileWrapper>

      </Container>

      <ContentSliderWrapper>
        <SliderWrapper totalSlides={slides.length} style={{ transform: `translateX(-${currentIndex * (100 / slides.length)}%)` }}>
          {slides.map((slide) => (
            <Slide key={slide.id}>
              <h3>{slide.title}</h3>
              <p>{slide.content}</p>
            </Slide>
          ))}
        </SliderWrapper>
        <PrevButton onClick={handlePrev}>&lt;</PrevButton>
        <NextButton onClick={handleNext}>&gt;</NextButton>
      </ContentSliderWrapper>


    </>
  )
}