import React from 'react'
import { ButtonStock } from './style'
const StockButton = ({ onClick, htmlType, values, children, ...props }) => {
  return (
    <ButtonStock>
      <ButtonStock type={htmlType} value={values} onClick={onClick} {...props}>
        {children}
      </ButtonStock>
    </ButtonStock>
  )
}

export default StockButton
