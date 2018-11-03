import React from 'react'
import styled from 'react-emotion'

const SupportingConceptsSection = styled('section')`
  width: 100vw;
  height: 100vh;
  background: white;
  outline-color: purple;
  outline-style: dashed;
`

const imagesLayout = images =>
  images.map(i => <img src={i.file.url} key={i.id} />)

const Copy = ({ copy } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div>{inner}</div>
}

const SupportingConcepts = ({ supportingConcepts } = {}) => {
  // console.log('Supporting concepts pane -> ', supportingConcepts)
  const sections = supportingConcepts.map(i => (
    <SupportingConceptsSection key={i.id}>
      {imagesLayout(i.images)}
      <div>{i.title}</div>
      <Copy copy={i.copy} />
    </SupportingConceptsSection>
  ))

  return <>{sections}</>
}

export default SupportingConcepts
