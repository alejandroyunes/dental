import styled from 'styled-components'

export const Container = styled.section`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
`
export const ProAndCon = styled.div`
  display: flex;
  margin: 24px 24px;
  background-color: ${({ theme }) => theme.palette.black};
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) { 
    flex-direction: column;
    margin: 0 auto 40px;
  }

  .pros, .cons {
    flex: 1;
    padding: 20px;
  }

  p {
    font-size: 1.4rem;
    padding-bottom: 12px;
    color: ${({ theme }) => theme.palette.white};
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
    color: ${({ theme }) => theme.palette.white};
  }

  .icon {
    font-size: 20px;
    display: inline-block;
    margin-right: 10px;
  }

  .pros .icon {
    color: #4caf50;
  }

  .cons .icon {
    color: #ff5252;
  }
`
export const ProAndConButton = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 24px;
`
