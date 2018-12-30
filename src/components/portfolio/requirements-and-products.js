import React from 'react'
import { ComponentSingleImage } from '.'

const RequirementsAndProducts = ({ requirementsAndProducts, color } = {}) => {
  const { cssClasses, image, title, copy } = requirementsAndProducts

  const imagePosition = cssClasses ? cssClasses[0].className : null

  return (
    <ComponentSingleImage
      copy={copy}
      image={image}
      title={title}
      copy={title}
      color={color}
      cssClasses={cssClasses}
      imagePosition={imagePosition}
    />
  )
}

export default RequirementsAndProducts
