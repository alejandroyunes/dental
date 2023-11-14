import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
`
export const DesktopWrapper = styled.div`
  margin: 0 auto;
  max-width:  ${({ theme }) => theme.breakpoint.sm};

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: none;
  }
`
export const MobileWrapper = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    display: grid;
  }
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  tr:nth-child(2n+2) { 
    background-color: ${({ theme }) => theme.palette.primary.contrastBg};
  }
  td:nth-child(2) {
    background: ${({ theme }) => theme.palette.secondary.contrastBg};
    border: 1px solid ${({ theme }) => theme.palette.primary.contrastText};
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
`;