import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  outline-style: dashed;
  outline-color: salmon;
`

function CaseStudySectionSingleImage(props) {
  return <MockSection>Single Image Section</MockSection>
}

CaseStudySectionSingleImage.propTypes = {}

export default CaseStudySectionSingleImage
