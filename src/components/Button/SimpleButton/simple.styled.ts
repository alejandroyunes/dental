import styled from "styled-components"

export const Container = styled.div`
  display: flex;
`

export const SimpleButton = styled.button`
  line-height: 42px;
  margin: 0 auto;
  span {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
    border: none;
    border-radius: 8px;
    padding: 0 24px;
    height: 42px;
    cursor: pointer;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 400;
    transition: color 0.3s ease, transform 0.2s ease;
    white-space: nowrap;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  }
  a:hover, span:hover {
    transform: scale(1.1);
  }
  .color { 
    background-color: ${({ theme }) => theme.palette.primary.contrastButton};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }
`