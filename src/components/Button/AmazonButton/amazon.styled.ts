import styled from "styled-components";

export const SimpleButton = styled.button`
  display: inline-block;
  scroll-behavior: smooth;
  line-height: 42px; 
  span {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.black};
    border: none;
    padding: 0 24px;
    height: 42px;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;
    font-size: 1.2rem;
    font-weight: 400;
    transition: color 0.3s ease, transform 0.2s ease;
    white-space: nowrap;
  }
  a:hover {
    transform: scale(1.1);
  }
  .color { 
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.white};
  }
`