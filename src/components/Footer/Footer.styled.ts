import styled from 'styled-components'

export const FooterContainer = styled.footer`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 60px 24px 40px;
  max-width: ${({ theme }) => theme.breakpoint.md};
  gap: 10px;
  @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
    grid-template-columns: repeat(1, auto);
    grid-template-rows: repeat(2, auto);
    }
  .footer-left {
    h1 {
      font-weight: bold;
      color: ${({ theme }) => theme.textColor};
      font-size: 1.5rem;
      line-height: 1.2;
    }
    h2 {
      color: ${({ theme }) => theme.textColor};
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 8px 0;
      font-weight: 400;
    }
    p {
      color: ${({ theme }) => theme.textColor};
      font-size: 1.2rem;
      line-height: 2rem;
      padding: 0 0 8px 0;
      text-decoration: underline;
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.sm}){
      h1 {
        font-size: 2em;
      }
    }
  }
  .footer-right {
    margin: auto 0;
    p {
      max-width: 400px;
      padding-top: 8px;
      line-height: 1.5;
      font-size: .9rem;
      color: ${({ theme }) => theme.textColor};
    }
  }
`

