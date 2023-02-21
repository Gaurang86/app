import React from 'react'

const Label = ({ className, title }) => {
  return (
    <div>
      <Label className={className}>{title}</Label>
    </div>
  )
}

export default Label
