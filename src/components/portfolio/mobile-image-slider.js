import React from 'react'

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
    naturalSlideWidth={300}
    naturalSlideHeight={340}
    totalSlides={images.length}
  >
    <Slider>
      {images.map((item, index) => (
        <Slide tag="a" index={item.index} key={item.id}>
          <Image
            src={item.slider.src}
            onClick={handleOpen({
              modalImage: item.original.src,
            })}
          />
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
