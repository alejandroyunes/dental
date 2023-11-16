import styled from "styled-components"

export const Container = styled.section`
  max-width:  ${({ theme }) => theme.breakpoint.sm};
  margin: 0 auto;
`

export const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 24px 24px;
  -webkit-tap-highlight-color: transparent;

  details {
    font-size: 1.2rem;
    box-shadow: 0 20px 20px -20px rgba(0, 0, 0, 0.1),
      0 5px 5px -5px rgba(0, 0, 0, 0.02);
    width: 100%;
    background: #ffffff;
    border-radius: 8px;
    position: relative;
    max-width: 500px;
    margin: 8px 0;
    padding: 10px;
    border: 1px solid #e2e8f0;
    span {
      color: ${({ theme }) => theme.palette.black};
    }
    .summary-title {
      user-select: none;
      padding-right: 12px;
    }

    &:hover {
      cursor: pointer;
    }

    .summary-content {
      border-top: 1px solid #e2e8f0;
      cursor: default;
      padding: 8px;
      font-weight: 300;
      line-height: 1.5;
      color: ${({ theme }) => theme.palette.black};
    }

    .view-more {
      font-weight: 300;
      line-height: 1.5;
      padding: 8px;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }

    summary {
      list-style: none;
      padding: 8px;

      &:focus {
        outline: none;
      }
    }

    .summary-chevron-up,
    .summary-chevron-down {
      pointer-events: none;
      position: absolute;
      top: 1em;
      right: 1em;
      background:  ${({ theme }) => theme.palette.primary.main};
      color: #ffffff;
      svg {
        display: block;
      }
    }

    summary::-webkit-details-marker {
      display: none;
    }
  }
`