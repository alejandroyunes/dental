import styled from 'styled-components'

interface BillboardProps {
  image: string
  mobileimage?: string
}

export const Container = styled.section<BillboardProps>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 80vh;

  @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    background-image: url(${({ mobileimage }) => mobileimage});
  }
`
export const Billboard = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  padding: 140px 24px 0;

  @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    padding-top: 24px;
  }

  .title {
    width: 800px;
    border: 1px solid #333;
    background: #123b5cc7;
    padding: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
      width: 700px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
      width: 100%;
    }
    h1 {
      font-weight: 400;
      color: ${({ theme }) => theme.palette.white};
      font-size: 1.5rem;
    }
    h2 {
      font-weight: bold;
      color: ${({ theme }) => theme.palette.white};
      font-size: 3rem;
      @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
        font-size: 1.8rem;
      }
    }
    p {
      color: ${({ theme }) => theme.palette.white};
      font-size: 1.5rem;
      line-height: 2rem;
      padding: 20px 0 36px;
      font-weight: 400;
      @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
        font-size: 1.1rem;
      }
    }
  }
`

