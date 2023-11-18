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
    background: ${({ theme }) => theme.palette.primary.contrastBg};
    border: 1px solid ${({ theme }) => theme.palette.primary.contrastBorder};
  }
  img {
    margin: 0 auto;
  }
  svg {
    margin: 0 auto;
  }
  th, td {
    border: 1px solid ${({ theme }) => theme.palette.primary.contrastBorder};
    text-align: left;
    padding: 8px;
  }

  td {
    font-size: 1rem;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
  }
`

type SliderProps = {
  totalSlides: number
}

export const ContentSliderWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

export const SliderWrapper = styled.div<SliderProps>`
  display: flex;
  width: ${(props) => props.totalSlides * 100}%;
  transition: transform 0.5s ease-in-out;
`


export const Slide = styled.div`
  width: 100%; 
  box-sizing: border-box;
  padding: 20px;
  text-align: center;
`

export const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color:    ${({ theme }) => theme.palette.gray};
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
`

export const PrevButton = styled(NavigationButton)`
  left: 0px;
`

export const NextButton = styled(NavigationButton)`
  right: 0px;
`