import styled from "styled-components"

export const Container = styled.section`
  width: 100%;
  padding: 24px;
  .url {
    font-size: 1.3rem;
    line-height: 1.5;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    text-decoration: underline;
    transition: color 0.3s ease, transform 0.2s ease;
    padding-top: 8px;
    &:hover { 
      color: ${({ theme }) => theme.textColor};
      transform: scale(1.1);
    }
  }
`

export const Product = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xs};
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  justify-items: center;
  padding: 24px;
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.palette.primary.contrastBg};
  box-shadow: 0 2px 10px -1px ${({ theme }) => theme.palette.primary.contrastBg};
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}){
    grid-template-columns: 1fr;
    justify-content: center;
    img {
      margin: 0 auto;
    }
  }
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h3 {
    margin-top: 0;
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 16px;
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
  p {
    font-size: 1.125rem;
    margin-bottom: 8px;
  }
  .product-title {
    padding-top: 16px;
  }
  .product-characteristic {
    font-size: 1.250rem;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .buy-button {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    svg {
      margin-bottom: 16px;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
`
