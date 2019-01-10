import React from 'react'
import Slider from 'react-slick'
import styled from 'react-emotion'

const ImageSliderContainer = styled('div')`
  max-height: 50vh;
  overflow: hidden;

  div img {
    margin: 0 auto;
  }
`

const ImageContainer = styled('div')`
  margin: 0 auto;
  max-height: 400px;
  min-height: 300px;
  background: ${props => (props.src ? `url("${props.src}")` : 'red')};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`

var settings = {
  dots: false,
  infinite: false,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const MobileImageSlider = ({ handleOpen, images, title } = {}) => {
  const Slides = images.map(i => (
    <div>
      <ImageContainer
        // src={i.fluid.src}
        src="https://placehold.it/400/400"
        key={i.id}
        onClick={handleOpen({ modalImage: i.file.url, title })}
      />
    </div>
  ))

  return (
    <ImageSliderContainer>
      <Slider {...settings}>{/* <Slides /> */}</Slider>
    </ImageSliderContainer>
  )
}

export default MobileImageSlider
