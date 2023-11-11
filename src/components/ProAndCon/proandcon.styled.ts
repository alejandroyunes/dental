import styled from "styled-components"

export const ProAndConContainer = styled.div`
  margin: 0 24px;
`
export const ProAndCon = styled.div`
  display: flex;
  margin: 40px auto;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.palette.black};
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) { 
    flex-direction: column;
  }

  .pros, .cons {
    flex: 1;
    padding: 20px;
  }

  h2 {
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
`
