import React from 'react'
import Slider from 'react-slick'
import styled from 'react-emotion'

const ImageSliderContainer = styled('div')`
  max-height: 400px;
  overflow: hidden;

  div img {
    margin: 0 auto;
  }

  div .image-container {
    margin: 0 auto;
    max-height: 400px;
    min-height: 300px;
    background: url('http://placehold.it/500/500/');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`

var settings = {
  dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
}

const ImageSlider = () => (
  <ImageSliderContainer>
    <Slider {...settings}>
      <div>
        <div className="image-container" />
      </div>
      <div>
        <div className="image-container" />
      </div>
      <div>
        <div className="image-container" />
      </div>
    </Slider>
  </ImageSliderContainer>
)

export default ImageSlider
