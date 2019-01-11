import React from 'react'
import styled from 'react-emotion'

import { Container, Button, Divider } from 'semantic-ui-react'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {
  CarouselProvider,
  Image,
  Slide,
  Slider,
  Dot,
} from 'pure-react-carousel'

const CustomDotGroup = ({ slides, size }) => {
  return (
    <Container textAlign="center">
      <Button.Group size={size}>
        {slides.map(slide => (
          <Button as={Dot} key={slide.id} icon="circle" slide={slide.index} />
        ))}
      </Button.Group>
    </Container>
  )
}

const ImageSlider = ({ title, handleOpen, images } = {}) => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={1}
    totalSlides={images.length}
  >
    <Slider>
      {images.map((item, index) => (
        <Slide tag="a" index={item.index} key={item.id}>
          <Image src={item.fluid.src} />
        </Slide>
      ))}
    </Slider>

    <Divider />
    <CustomDotGroup
      slides={images.map((item, index) => ({ id: item.id, index }))}
    />
  </CarouselProvider>
)

export default ImageSlider
