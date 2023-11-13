import Title from "../Title/Title"
import { Container, DesktopWrapper, TableMobile, StyledTable } from "./comparative.styled"
import PrimeSvg from "./svg/Prime"
import { Link } from "react-router-dom"
import AmazonButton from "../Button/AmazonButton/AmazonButton"

type ItemProps = {
  models: string
  image: string
  prime: boolean
  dimensions: string
  replacementHeads: string
  capacity: string
  highlight: string
  problem: string
  price: string
  satisfaction: string
  view: string
  url: string
  [key: string]: string | boolean | number
}

type TitleProps = {
  title: string
}

type Props = {
  title: string
  message: string
  primeUrl: string
  items: ItemProps[]
  titles: TitleProps[]
}

export default function ({ title, message, items, primeUrl, titles }: Props) {

  return (
    <>
      <Container>
        <Title titleH2={title} message={message} />
        <DesktopWrapper>
          <StyledTable>
            <tbody>
              {titles.map((title, i) => (
                <tr key={i}>
                  <td className="title">{title.title}</td>
                  {items.map((item, index) => {

                    const cellValue =
                      title.title.toLowerCase() === 'prime'
                        ? item[title.title.toLowerCase()] ? <Link to={primeUrl} target="_blank"><PrimeSvg /></Link> : '-'
                        : title.title.toLowerCase() === 'image'
                          ? <img src={`${item[title.title.toLowerCase()]}`} alt={title.title.toLowerCase()} width={160} height={160} />
                          : title.title.toLowerCase() === 'view'
                            ? <AmazonButton text={`${item[title.title.toLowerCase()]}`} url={item.url} blank={true} />
                            : `${item[title.title.toLowerCase().split(' ').join('')]}`

                    return <td key={index}>{cellValue}</td>;
                  })}
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </DesktopWrapper >

        <TableMobile>


        </TableMobile>
      </Container>



    </>
  )
}