import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: ${({ theme }) => theme.palette.primary.contrastBg}; */
`
export const Column = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 24px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, auto);
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, auto);
  }

  .product {
    max-width: ${({ theme }) => theme.breakpoint.xs};
    display: grid;
    grid-template-columns: 1fr; 
    padding: 24px;
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.palette.primary.contrastBg};
    box-shadow: 0 2px 10px -1px ${({ theme }) => theme.palette.primary.contrastBg};
    border-radius: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}){
      grid-template-columns: 1fr;
      justify-content: center;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
      padding-bottom: 8px;
    }
    h3 {
      margin-top: 0;
      font-size: 1.2rem;
      line-height: 1.5;
      margin-bottom: 4px;
      text-decoration: underline;
      font-weight: 400;
    }
    ul {
    margin: 0;
    padding: 0;
    list-style-type: disc;
    }
    li {
      margin: 0 0 10px 16px;
      font-size: 1.125rem;
    }
    .product-characteristic {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .buy-button {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
  
      svg {
        margin: 12px 0;
      }
    }
  }
`

export const Button = styled.div`
  display: flex;
  justify-content: center;
`