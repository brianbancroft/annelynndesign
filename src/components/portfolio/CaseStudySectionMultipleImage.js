import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MockSection = styled.section`
  width: 100vw;
  height: 100vh;
  outline-style: dashed;
  outline-color: salmon;
`

function CaseStudySectionMultipleImage(props) {
  return <MockSection>Multiple Image Section</MockSection>
}

CaseStudySectionMultipleImage.propTypes = {}

export default CaseStudySectionMultipleImage
