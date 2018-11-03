import React from 'react'
import styled from 'react-emotion'

const SupportingConceptsSection = styled('section')`
  width: 100vw;
  height: 100vh;
  background: white;
  outline-color: purple;
  outline-style: dashed;
`

const SupportingConcepts = ({ supportingConcepts } = {}) => {
  console.log('Supporting concepts pane -> ', supportingConcepts)
  const sections = supportingConcepts.map(i => (
    <SupportingConceptsSection key={i.id}>
      <div>{i.title}</div>
      <div>
        Aliqua aliquip magna elit elit velit culpa eiusmod. Id non dolore nisi
        tempor duis quis sit esse occaecat sint excepteur reprehenderit ut.
        Cillum elit cupidatat occaecat incididunt tempor officia ut ut consequat
        esse sit. Incididunt aliqua magna nostrud exercitation nostrud elit
        consequat esse laboris do Lorem pariatur veniam est. Laboris excepteur
        aliquip pariatur nisi elit ipsum consequat id officia Lorem ullamco
        laboris consectetur.
      </div>
    </SupportingConceptsSection>
  ))

  return <>{sections}</>
}

export default SupportingConcepts
