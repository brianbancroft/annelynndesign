import React from 'react'
import styled from '@emotion/styled'
import { ProfileCircle } from '../styled/'

const aboutAssets = [
  {
    photos: {
      top: 'http://lorempixel.com/output/cats-q-c-300-300-1.jpg',
      middle: 'http://lorempixel.com/output/cats-q-c-300-300-2.jpg',
      bottom: 'http://lorempixel.com/output/cats-q-c-300-300-3.jpg',
    },
    copy: (
      <>
        In my spare time you’ll find me tending to my <strong>plants</strong>{' '}
        making <strong>flower arrangements</strong> or{' '}
        <strong>making stuff with my hands</strong>. I love learning new things
        and helping others experience it as well is part of the fun!
      </>
    ),
  },
  {
    photos: {
      top: 'http://lorempixel.com/output/city-q-c-300-300-1.jpg',
      middle: 'http://lorempixel.com/output/city-q-c-300-300-2.jpg',
      bottom: 'http://lorempixel.com/output/city-q-c-300-300-3.jpg',
    },
    copy: (
      <>
        In my spare time you’ll find me tending to my cars tuning my carborators
        or making things with my hands. I love learning new things and helping
        others experience it as well is part of the fun!
      </>
    ),
  },
]

const HobbySection = styled('section')`
  display: grid;
  max-width: 600px;
  height: calc(100vh - ${props => props.theme.footer.height});
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 240px 1fr;
  align-items: center;
  background: ${props => props.theme.color.light};

  .hobby-image {
    grid-column: 1 / 2;
    justify-self: center;
  }

  .hobby-copy {
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    align-self: flex-start;
    padding: 20px 25px;

    /* transform: scale(1, 1.2); */
    font-weight: 100;
    line-height: 24px;
    font-size: 22px;
    color: ${props => props.theme.color.primary};

    strong {
      font-weight: 500;
    }
  }
`

const HobbyBlurb = () => {
  // debugger

  const {
    photos: { top, middle, bottom },
    copy,
  } = aboutAssets[Math.floor(Math.random() * Math.floor(aboutAssets.length))]

  return (
    <HobbySection>
      <div className="hobby-copy">{copy}</div>
      <ProfileCircle className="hobby-image">
        <img src={top} className="image" />
      </ProfileCircle>
      <ProfileCircle className="hobby-image">
        <img src={middle} className="image" />
      </ProfileCircle>
      <ProfileCircle className="hobby-image">
        <img src={bottom} className="image" />
      </ProfileCircle>
    </HobbySection>
  )
}

export default HobbyBlurb
