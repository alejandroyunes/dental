import styled from "styled-components"

export const Container = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  
  h2 {
    font-size: 2rem;
    padding-top: 24px;

    color: ${({ theme }) => theme.textColor};
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    padding-top: 24px;
  }
  span {
    font-weight: 700;
  }
`

export const Legal = styled.div`
  margin: 0 24px;
`