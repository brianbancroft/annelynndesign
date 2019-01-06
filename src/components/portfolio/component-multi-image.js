import React, { Component } from 'react'
import styled from 'react-emotion'

const MultiImageSection = styled('section')`
  width: 100vw;
  height: 80vh;
  background: white;
  outline-style: double;
  outline-color: red;

  display: grid;
  grid-template-rows: 1fr 100px;
  grid-template-columns: 50px 250px 600px 50px;
  grid-row-gap: 10px;
  grid-column-gap: 30px;

  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};
  font-family: AvenirNext-UltraLight;

  .images-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    grid-column: 2 / 4;
    grid-row: 1 / 2;
    background: white;
  }

  .title {
    grid-row: 2 / 3;
    grid-column: 2 / 3;

    font-size: 1.2rem;
    font-weight: 600;
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

const Modal = styled('div')`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 123;
  top: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h1.title {
    text-align: center;
    height: 20vh;
    width: 100vw;
    margin-top: 15px;
  }

  .image-container {
    height: 80vh;
    width: 100vw;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ease-out 2s;

    img {
      max-width: 80vw;
      max-height: 80vh;
    }
  }
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
      console.log('Images in images layout -> ', images)
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

    const ImageModal = () => {
      return this.state.showModal ? (
        <Modal onClick={handleClose}>
          <h1 className="title">{this.state.title}</h1>
          <div className="image-container">
            <img src={this.state.modalImage} />
          </div>
        </Modal>
      ) : (
        <></>
      )
    }

    return (
      <>
        <ImageModal id="imageModal" />
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
