import styled from "styled-components"

interface ImageProps {
  image: string
  mobileimage?: string
}

export const Container = styled.div<ImageProps>`
  width: 100%;
  background: 
  linear-gradient(rgb(8 7 7 / 80%), rgb(38 31 31 / 69%)),
  url(${({ image }) => image}) center/cover no-repeat;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
    height: 100%;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
    background: 
      linear-gradient(rgb(8 7 7 / 88%), rgb(38 31 31 / 69%)),
      url(${({ mobileimage }) => mobileimage}) center/cover no-repeat;
  }
`
export const Header = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.md};
  margin: 0 auto;
  min-height: 300px;
  padding: 24px;
  @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
    height: 100%;
  }
  h2 {
    color: ${({ theme }) => theme.palette.white};
    font-size: 1.5rem;
    @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
      font-size: 1.8rem;
    }
  }
  h1 {
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
      line-height: 1.5rem;
      padding: 24px 0 16px;
      font-weight: 400;
      @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
        font-size: 1.1rem;
      }
    }
  .last-updated {
    color: ${({ theme }) => theme.palette.white};
    padding: 0;
    font-size: .8rem;
    font-weight: 400;
    @media(max-width: ${({ theme }) => theme.breakpoint.xs}){
      font-size: 1rem;
    }
  }
  button {
    margin-top: 16px;
    margin-left: 0;
    text-align: left;
  }
`