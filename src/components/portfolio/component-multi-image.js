import React, { Component } from 'react'
import styled from 'react-emotion'
import { ImageModal, ImageSlider } from '.'

const MultiImageSection = styled('section')`
  z-index: 10;
  width: 100vw;
  height: 80vh;
  background: white;

  display: grid;
  grid-template-rows: 1fr 100px 400px 100px;
  grid-template-columns: 50px 20vw 20vw 1fr 50px;
  grid-row-gap: 10px;
  grid-column-gap: 30px;

  align-items: center;
  margin: 10vw 0;
  color: ${props => (props.color ? props.color : 'inherit')};

  @media (max-width: 600px) {
    display: flex;
    width: 90vw;
    height: 90vw;
    margin: 5vh 5vw;

    .images-container {
      height: 50vw;
    }
    .title {
      height: 100px;
    }

    .copy {
    }
  }

  .images-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    grid-column: 2 / 5;
    grid-row: 1 / 3;
    background: white;
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

const MobileLayout = styled('div')`
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`

const DesktopLayout = styled('div')`
  display: block;
  @media (max-width: 600px) {
    display: none;
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

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <>
        {/* <ImageModal
          id="imageModal"
          display={this.state.showModal}
          title={this.state.title}
          modalImage={this.state.modalImage}
          handleClose={handleClose}
        /> */}
        <MultiImageSection color={color}>
          <div />
          <div />
          <div className="images-container">
            <MobileLayout>Mobile, Baby!</MobileLayout>
            <DesktopLayout>{imagesLayout(images)}</DesktopLayout>
          </div>
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
