import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const DesktopWrapper = styled.div`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
`

export const TableMobile = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: grid;
  }

`

export const StyledTable = styled.table`
 border-collapse: collapse;
  width: 100%;

  tr:nth-child(2n+2) { 
    background-color: ${({ theme }) => theme.palette.primary.contrastBg};
  }
  .title {
    font-weight: 600;
  }

  img {
    margin: 0 auto;
  }

  svg {
    margin: 0 auto;
  }
  th, td {
    border: 1px solid ${({ theme }) => theme.palette.secondary.contrastText};
    text-align: left;
    padding: 8px;
  }

  td {
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 600px) {
    font-size: 14px;

    th, td {
      padding: 6px;
    }
  }

  @media (max-width: 400px) {
    font-size: 12px;

    th, td {
      padding: 4px;
    }
  }
`;