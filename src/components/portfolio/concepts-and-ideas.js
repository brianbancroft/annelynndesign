import React from 'react'
import styled from 'react-emotion'

const ConceptAndIdeasSection = styled('section')`
  width: 100vw;
  height: 80vh;
  background: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};
  font-family: AvenirNext-UltraLight;

  .images-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  .images-container img {
    margin-right: 5px;
  }

  .copy-container {
    display: grid;
    grid-template-rows: 80px;
    grid-template-columns: 250px 600px;
    grid-column-gap: 30px;
  }

  .copy-container__title {
    font-size: 1.2rem;
    font-weight: 600;
    color: ${props => (props.color ? props.color : 'inherit')};
  }
`

const imagesLayout = images =>
  images.map(i => <img src={i.file.url} key={i.id} width="400" />)

const Copy = ({ copy } = {}) => {
  const inner = copy ? copy.copy || '' : ''
  return <div>{inner}</div>
}

const ConceptsAndIdeas = ({ conceptAndIdeas, color } = {}) => {
  // console.log('Concpets and ideas pane -> ', conceptAndIdeas)
  const sections = conceptAndIdeas.map(i => (
    <ConceptAndIdeasSection key={i.id} color={color}>
      <div
        className={`images-container ${
          i.cssClasses ? i.cssClases.join(' ') : ''
        }`}
      >
        {imagesLayout(i.images)}
      </div>
      <div className="copy-container">
        <div className="copy-container__title">{i.title}</div>
        <Copy copy={i.copy} />
      </div>
    </ConceptAndIdeasSection>
  ))

  return <>{sections}</>
}

export default ConceptsAndIdeas
