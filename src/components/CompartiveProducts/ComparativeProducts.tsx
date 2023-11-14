import Title from "../Title/Title"
import { Container, DesktopWrapper, MobileTable, MobileWrapper, Table } from "./comparative.styled"
import PrimeSvg from "./svg/Prime"
import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"

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
  ];

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



    </>
  )
}