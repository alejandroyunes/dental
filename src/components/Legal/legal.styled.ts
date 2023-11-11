import styled from "styled-components"

export const Container = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  
  h1 {
    font-size: 2rem;
    color: ${({ theme }) => theme.textColor};
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    padding-top: 24px;
  }
`

export const Legal = styled.div`
  margin: 0 24px;
`