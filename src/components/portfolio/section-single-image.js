import React from 'react'
import { ComponentSingleImage } from '.'

const sectionSingleImage = ({ section, color, handleOpen }) => {
  return section ? (
    <ComponentSingleImage
      copy={section.copy}
      image={section.image}
      title={section.title}
      color={color}
      imagePosition={section.imagePosition}
      handleOpen={handleOpen}
    />
  ) : (
    <></>
  )
}

export default sectionSingleImage
