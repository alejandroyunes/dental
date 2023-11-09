import styled from 'styled-components'

interface BillboardProps {
  image: string
}

export const BillboardContainer = styled.div<BillboardProps>`
  padding: 32px 24px;
  display: grid;
  grid-template-columns: auto auto;
  margin: 0 auto;
  gap: 0;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;

  @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
    padding: 20px 24px;
  }
  .billboard-title {
    width: 700px;
    margin: auto 0;
    border: 1px solid #333;
    background: #123b5cc7;
    padding: 24px;
    @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    padding-right: 0;
    }
    h1 {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.primary.main};
      font-size: 3rem;
      @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
        font-size: 2.6rem;
      }
    }
    h2 {
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      line-height: 2rem;
      padding: 20px 0;
      font-weight: 400;
    }
  }
  .billboard-contact {
    display: inline-flex;
    scroll-behavior: smooth;
    line-height: 42px; 
      a {
        background-color: ${({ theme }) => theme.palette.primary.main};
        color: white;
        border: none;
        width: 140px;
        height: 42px;
        cursor: pointer;
        text-decoration: none;
        display: grid;
        place-items: center;
      }
      a:hover {
        opacity: 0.8;
      }
  }
`