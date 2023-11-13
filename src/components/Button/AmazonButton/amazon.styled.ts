import styled from "styled-components";

export const SimpleButton = styled.button`
  display: inline-block;
  scroll-behavior: smooth;
  line-height: 40px; 
  span {
    color: ${({ theme }) => theme.palette.black};
    border: none;
    padding: 0 18px;
    height: 40px;
    cursor: pointer;
    text-decoration: none;
    display: grid;
    place-items: center;
    font-size: 1rem;
    font-weight: 400;
    transition: color 0.3s ease, transform 0.2s ease;
    white-space: nowrap;
    
    background: linear-gradient(180deg,#f7dfa5,#f0c14b) repeat scroll 0 0 transparent;
    border: 1px solid #9c7e31;
    border-radius: 3px;
    box-shadow: inset 0 1px 0 hsla(0,0%,100%,.4);

  }
  span:hover {
    transform: scale(1.1);
  }
`