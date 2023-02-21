import React from 'react'
import { InputStyle } from './style'
const Input = ({
  handleChange,
  values,
  className,
  size,
  formClass,
  max,
  error,
  ...props
}) => {
  return (
    <InputStyle>
      <input
        value={values}
        size={size}
        onChange={handleChange}
        className={`form-control ${className}`}
        {...props}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </InputStyle>
  )
}

export default Input
