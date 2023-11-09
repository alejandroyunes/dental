import styled from "styled-components";

export const SimpleButton = styled.button`
  display: inline-flex;
  scroll-behavior: smooth;
  line-height: 42px; 
    a {
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
    }
    a:hover {
      opacity: 0.8;
    }
`