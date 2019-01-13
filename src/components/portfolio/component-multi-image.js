import React, { Component } from 'react'
import styled from 'react-emotion'
import { ImageModal, MobileImageSlider } from '.'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: 80vh;
  background: white;

  display: grid;
  grid-template-rows: 1fr 400px 100px;
  grid-template-columns: 50px 20vw 20vw 1fr 50px;
  grid-row-gap: 10px;
  grid-column-gap: 30px;

  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;

    .title {
      height: 100px;
    }

    .copy {
    }
  }

  .images-container {
  }

  .title {
    grid-column: 3 / 4;
    grid-row: 3 / 4;

    font-size: 1.2rem;
    font-family: 'Raleway Semi-Bold', sans-serif;
    text-transform: capitalize;
    font-weight: 500;
    color: ${props => (props.color ? props.color : 'inherit')};
  }

  .copy {
    grid-column: 4 / 5;
    grid-row: 3 / 4;
    color: #222;
  }
`

const MobileLayout = styled('div')`
  width: 70vw;
  justify-content: center;
  grid-column: 2 / 6;
  grid-row: 1 / 3;
  background: white;
  min-height: 350px;
  display: none;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    display: block;
  }
`

const DesktopLayout = styled('div')`
  grid-column: 2 / 5;
  grid-row: 1 / 3;
  background: white;
  min-height: 350px;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }

  img {
    max-width: ${props =>
      props.numImages ? 80 / props.numImages + 'vw' : '80vw'};
    max-height: ${props =>
      props.numImages ? 80 / props.numImages + 'vw' : '80vw'};
    margin-right: 5px;
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

    const Copy = ({ copy } = {}) => {
      const inner = copy ? copy.copy || '' : ''
      return <div>{inner}</div>
    }

    const imagesLayout = ({ images, title } = {}) =>
      images.map(i => (
        <img
          src={i.fluid.src}
          key={i.id}
          onClick={handleOpen({
            modalImage: i.fluid.src,
            title: title,
          })}
        />
      ))

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
          <MobileLayout className="images-container">
            <MobileImageSlider
              title={title}
              handleOpen={handleOpen}
              images={images}
            />
          </MobileLayout>
          <DesktopLayout numImages={images.length}>
            {imagesLayout({ images, title })}
          </DesktopLayout>
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
