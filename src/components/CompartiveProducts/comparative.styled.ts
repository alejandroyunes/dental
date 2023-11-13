import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`

export const DesktopWrapper = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
  p {
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  }
`

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  border: 1px solid ${({ theme }) => theme.palette.secondary.contrastText}; 
  border-right: none;
  border-bottom: none;
  margin: 0 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: none;
  }
  .highlighted {
    font-weight: 600;
    p {
      text-align: left;
    }
  }
  .grid-item {
    padding: 10px;

  }
  .grid-item:nth-child(2n+1) { 
    background-color: ${({ theme }) => theme.palette.primary.contrastBg};
  }
  .grid-item { 
    border-right: 1px solid ${({ theme }) => theme.palette.secondary.contrastText};
    border-bottom: 1px solid ${({ theme }) => theme.palette.secondary.contrastText};
  }
  .grid-item-image {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-item-prime {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-prime-svg {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-item-image-text {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-image-highlight {
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-image-problem {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-buy {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-buy-button {
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
`

export const TableMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(1, 1fr);
    margin: 0 24px;
    border: 1px solid ${({ theme }) => theme.palette.primary.main}; 
    border-bottom: none;
  }
  .grid-item {
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
  .grid-item:nth-child(2n+1) { 
    background-color: ${({ theme }) => theme.palette.primary.contrastBg};
  }
  .grid-item-image {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-item-image-text {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-prime {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      width: 100%;
    }
  }
  .grid-item-prime-svg {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid-item-text {
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .highlighted {
    font-weight: 600;
    border-right: 1px solid ${({ theme }) => theme.palette.primary.main};
  }
`