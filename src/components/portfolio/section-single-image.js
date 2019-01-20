import React from 'react'
import { ComponentSingleImage } from '.'

const sectionSingleImage = ({ section, color }) => (
  <ComponentSingleImage
    copy={section.copy}
    image={section.image}
    title={section.title}
    color={color}
    imagePosition={section.imagePosition}
  />
)

export default sectionSingleImage
