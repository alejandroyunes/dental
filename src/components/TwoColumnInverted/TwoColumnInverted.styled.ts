import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.contrastBg};
  margin: 32px 0;
`
export const TwoColumn = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;

`
export const Item = styled.div`
  display: grid;
  grid-template-columns: .5fr .5fr;
  grid-gap: 24px;
  padding: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: 1fr;
    padding: 0 24px 24px;
  }
  h3 {
    font-size: 1.4rem;
    padding-bottom: 12px;
    color: ${({ theme }) => theme.textColor};
    font-weight: 600;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textColor};
  }
  .image-items {
    margin: auto;
    img {
      cursor: pointer;
    }
    p {
      transition: color 0.3s ease,transform 0.2s ease;
    }

    p:hover {
      transform: scale(1.1);
    }
  }
  &:nth-child(odd) { 
    div:nth-child(even) { 
      order: -1;
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    &:nth-child(odd) { 
      div:nth-child(even) { 
        order: 1;
      }
    }
  }
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 32px;
`
