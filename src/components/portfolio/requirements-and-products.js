import React from 'react'
import styled from 'react-emotion'

const ColorTypographySection = styled('section')`
  width: 100vw;
  height: 100vh;
  background: white;
  outline-color: green;
  outline-style: dashed;
`
const RequirementsAndProducts = ({ requirementsAndProducts } = {}) => {
  console.log('Requirements and products pane -> ', requirementsAndProducts)
  const { id, cssClasses, image, title, copy } = requirementsAndProducts
  return (
    <ColorTypographySection>
      <img src={image.file.url} />
      <h2>{title}</h2>
      <div>{copy.copy || ''}</div>
    </ColorTypographySection>
  )
}

export default RequirementsAndProducts
