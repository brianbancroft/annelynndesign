import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import CaseStudyHeaderIntroduction from './CaseStudyHeaderIntroduction'
import CaseStudySectionSingleImage from './CaseStudySectionSingleImage'
import CaseStudySectionMultipleImage from './CaseStudySectionMultipleImage'

const Spacer = styled.div`
  height: 2px;
`

function CaseStudy(props) {
  const {
    title,
    color,
    createdAt,
    headline,
    text,
    exampleOf,
    childContent,
  } = props

  const CaseStudyContent = () =>
    childContent.map((element, index) => {
      if (element['__typename'] === 'ContentfulSingleImageSection')
        return (
          <CaseStudySectionSingleImage
            element={element}
            color={color}
            key={`single-image-section-${index}`}
            evenElement={(index - 1) % 2 === 0}
          />
        )

      if (element['__typename'] === 'ContentfulMultipleImageSection')
        return (
          <CaseStudySectionMultipleImage
            element={element}
            color={color}
            key={`multiple-image-section-${index}`}
            evenElement={(index - 1) % 2 === 0}
          />
        )

      console.error(
        `Element ${element.title} is neither a multiple image section or single`
      )
      return <></>
    })

  return (
    <>
      <CaseStudyHeaderIntroduction
        backgroundColor={color}
        headline={headline}
        copy={text}
      />
      {childContent && <CaseStudyContent />}
      <Spacer />
    </>
  )
}

CaseStudy.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  exampleOf: PropTypes.shape({}),
  childContent: PropTypes.array,
}

export default CaseStudy
