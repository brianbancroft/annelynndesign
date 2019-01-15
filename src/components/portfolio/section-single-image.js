import React from 'react'
import { ComponentSingleImage } from '.'

const sectionSingleImage = ({ section, color }) => (
  <ComponentSingleImage
    copy={section.copy}
    image={section.image}
    title={section.title}
    color={color}
    cssClasses={() =>
      section.cssClasses ? section.cssClasses[0].className : null
    }
    imagePosition={() =>
      section.cssClasses ? section.cssClasses[0].className : null
    }
  />
)

export default sectionSingleImage
