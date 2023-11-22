import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.primary.contrastBg};
`
export const Column = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin: 0 0 16px;
    line-height: 1.3;
    max-width: 660px;
    margin: 16px auto;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  }
  p {
    font-size: 1.125rem;
    line-height: 1.5;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(3, auto);
  }
  
  .child-card {
    margin: 24px 0;
    padding: 0 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100%;
    height: auto;
    cursor: pointer;
    border-radius: 8px;
  }
`