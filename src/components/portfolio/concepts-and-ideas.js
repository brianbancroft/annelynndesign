import React from 'react'
import styled from 'react-emotion'

const ConceptAndIdeasSection = styled('section')`
  width: 100vw;
  height: 100vh;
  background: white;
  outline-color: red;
  outline-style: dashed;
`

const imagesLayout = images =>
  images.map(i => <img src={i.file.url} key={i.id} />)

const Copy = ({ copy } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div>{inner}</div>
}

const ConceptsAndIdeas = ({ conceptAndIdeas } = {}) => {
  // console.log('Concpets and ideas pane -> ', conceptAndIdeas)
  const sections = conceptAndIdeas.map(i => (
    <ConceptAndIdeasSection key={i.id}>
      {imagesLayout(i.images)}
      <h2>{i.title}</h2>
      <Copy copy={i.copy} />
    </ConceptAndIdeasSection>
  ))

  return <>{sections}</>
}

export default ConceptsAndIdeas
