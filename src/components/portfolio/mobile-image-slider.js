import React from 'react'
import Slider from 'react-slick'
import styled from 'react-emotion'
import { Card } from 'semantic-ui-react'
import './image-slider.module.css'

const ImageSliderContainer = styled('div')`
  /* positio/n: relative; */
  margin-left: -75vw;
  max-height: 400px;
  width: 250vw;
  overflow: hidden;
  margin: 10px auto;

  div img {
    margin: 0 auto;
  }

  div .image-container {
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
  slidesToShow: 3,
  slidesToScroll: 1,
}

const imageSlides = ({ images, handleOpen, title } = {}) =>
  images.map(i => (
    <Card style={{ padding: '0 10px' }} id={i.id}>
      <Card.Content>
        <img src={i.fluid.src} height="285" />
      </Card.Content>
    </Card>
  ))

const ImageSlider = ({ images, title, handleOpen } = {}) => (
  <ImageSliderContainer>
    {/* {imageSlides({ images, handleOpen, title })} */}
    <Slider {...settings}>
      <Card style={{ padding: '0 10px' }}>
        <Card.Content>
          <img src="https://placehold.it/400/400" height="285" />
        </Card.Content>
      </Card>
      <Card style={{ padding: '0 10px' }}>
        <Card.Content>
          <Card.Description>
            <img src="https://placehold.it/400/400" />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card style={{ padding: '0 10px' }}>
        <Card.Content>
          <Card.Description>
            <img src="https://placehold.it/400/400" />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card style={{ padding: '0 10px' }}>
        <Card.Content>
          <Card.Description>
            <img src="https://placehold.it/400/400" />
          </Card.Description>
        </Card.Content>
      </Card>
      <Card style={{ padding: '0 10px' }}>
        <Card.Content>
          <Card.Description>
            <img src="https://placehold.it/400/400" />
          </Card.Description>
        </Card.Content>
      </Card>
    </Slider>
  </ImageSliderContainer>
)

export default ImageSlider
