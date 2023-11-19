import styled from 'styled-components'

export const TitleContainer = styled.div`
  margin: 0 auto;
  padding: 0 24px;
	max-width: ${({ theme }) => theme.breakpoint.sm};
  scroll-margin-top: 24px; 
  &.left {
    h1, h2 {
      text-align: left;
    }
  }
  p {
    margin-top: 0px;
    font-size: 1.2rem;
		font-weight: 400;
    color: ${({ theme }) => theme.textColor};
    padding-bottom: 16px;
  }
  .url {
    font-size: 1.3rem;
    line-height: 1.5;
    max-width: 660px;
    margin: 0 auto;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    text-decoration: underline;
    transition: color 0.3s ease, transform 0.2s ease;
    &:hover { 
      color: ${({ theme }) => theme.textColor};
      transform: scale(1.1);
    }
  }
  
  h1, h2 {
    text-align: center;
    font-size: 2rem;
		font-weight: 600;
    color: ${({ theme }) => theme.textColor};
    line-height: 3rem;
    padding: 24px 0;
  }
`