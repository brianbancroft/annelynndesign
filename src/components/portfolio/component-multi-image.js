import React, { Component } from 'react'
import styled from 'react-emotion'
import { ImageModal } from '.'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: 80vh;
  background: white;

  display: grid;
  grid-template-rows: 1fr 100px;
  grid-template-columns: 50px 250px 600px 1fr 50px;
  grid-row-gap: 10px;
  grid-column-gap: 30px;

  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};

  .images-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    grid-column: 2 / 5;
    grid-row: 1 / 2;
    background: white;
  }

  .title {
    grid-row: 2 / 3;
    grid-column: 2 / 3;

    font-size: 1.2rem;
    font-family: 'Raleway Semi-Bold', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    color: ${props => (props.color ? props.color : 'inherit')};
  }

  .copy {
    grid-row: 2 / 3;
    grid-column: 3 / 4;
    color: #222;
  }
`
const ImageContainer = styled('div')`
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  width: 800px;
  height: 400px;
  max-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin-right: 5px;
  cursor: pointer;
`

class ComponentMultiImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      modalImage: undefined,
      title: undefined,
    }
  }

  render() {
    const { color, images, copy, cssClasses, title } = this.props

    const handleOpen = ({ modalImage, title } = {}) => () =>
      this.setState({ showModal: true, modalImage, title })
    const handleClose = () => this.setState({ showModal: false })

    const imagesLayout = images => {
      return images.map(i => (
        <ImageContainer
          src={i.fluid.src}
          key={i.id}
          onClick={handleOpen({ modalImage: i.file.url, title })}
        />
      ))
    }

    const Copy = ({ copy } = {}) => {
      const inner = copy ? copy.copy || '' : ''
      return <div>{inner}</div>
    }

    return (
      <>
        <ImageModal
          id="imageModal"
          display={this.state.showModal}
          title={this.state.title}
          modalImage={this.state.modalImage}
          handleClose={handleClose}
        />
        <MultiImageSection color={color}>
          <div className="images-container">{imagesLayout(images)}</div>
          <div className="title">{title}</div>
          <div className="copy">
            <Copy copy={copy} />
          </div>
        </MultiImageSection>
      </>
    )
  }
}

export default ComponentMultiImage
