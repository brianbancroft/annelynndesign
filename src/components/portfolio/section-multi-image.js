import React from 'react'
import { ComponentMultiImage } from '.'

const sectionMultiImage = ({ section, color, handleClose, handleOpen } = {}) =>
  section
    ? section.map(i => (
        <ComponentMultiImage
          key={i.id}
          id={i.id}
          color={color}
          title={i.title}
          images={i.images}
          copy={i.copy}
          cssClasses={i.cssClasses}
          handleClose={handleClose}
          handleOpen={handleOpen}
        />
      ))
    : null

export default sectionMultiImage
