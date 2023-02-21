import styled from 'styled-components'
import { size } from '../../App/device'
import { Theme } from '../../App/theme'

const ButtonStock = styled.button`
  cursor: pointer;
  border: 1px solid #e4e4e4;
  display: inline-block;
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  min-width: 90px;
  letter-spacing: 0;
  font-size: 15px;
  text-transform: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.4s ease;
  font-family: 'Rubik', sans-serif;
  box-shadow: 0px 0px 2px rgb(0 0 0 / 45%);
  :hover,
  :focus {
    color: #000;
    background: ${Theme.mainColor};
    outline: none;
    .txt,
    .anticon {
      color: #fff;
    }
  }
  ${'' /* @media ${size['desktop-sm-max']} {
    height: 44px;
    line-height: 44px;
    font-size: 14px;
  } */}
`

export { ButtonStock }
