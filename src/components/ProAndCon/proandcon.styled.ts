import styled from "styled-components"

export const ProAndConContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .pros-cons-container {
    display: flex;
  }

  .pros, .cons {
    flex: 1;
    padding: 20px;
  }

  h1 {
    color: #333;
  }

  h2 {
    color: #007bff;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  ul li {
    margin-bottom: 10px;
    color: #555;
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
