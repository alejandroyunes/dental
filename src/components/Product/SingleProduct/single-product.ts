import styled from "styled-components"

export const Product = styled.div`
  max-width: ${({ theme }) => theme.breakpoint.xs};
  display: grid;
  grid-template-columns: 1fr 1.5fr; 
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
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  h3 {
    margin-top: 0;
    font-size: 1.5rem;
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
    align-items: flex-end;
    flex-direction: column;

    svg {
      margin-bottom: 16px;
    }
  }
`;