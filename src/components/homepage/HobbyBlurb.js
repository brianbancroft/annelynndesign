import React from 'react'
import styled from '@emotion/styled'
import { ProfileCircle, Paragraph } from '../styled/'

import watercolour1 from '../../images/watercolour-1.jpg'
import watercolour2 from '../../images/watercolour-2.jpg'
import watercolour3 from '../../images/watercolour-3.jpg'

import flower1 from '../../images/flower-1.jpg'
import flower2 from '../../images/flower-2.jpg'
import flower3 from '../../images/flower-3.jpg'

import craft1 from '../../images/craft-1.jpg'
import craft2 from '../../images/craft-2.jpg'
import craft3 from '../../images/craft-3.jpg'

const aboutAssets = [
  {
    photos: {
      top: flower1,
      middle: flower2,
      bottom: flower3,
    },
    copy: (
      <>
        In my spare time you’ll find me tending to my <strong>plants</strong>{' '}
        making <strong>flower arrangements</strong> or experimenting with{' '}
        <strong>cacti</strong>. I love <strong>learning new things</strong> and{' '}
        <strong>helping others</strong> so that they can experience it as well!
      </>
    ),
  },
  {
    photos: {
      top: watercolour1,
      middle: watercolour2,
      bottom: watercolour3,
    },
    copy: (
      <>
        In my spare time you’ll find me dabbing with{' '}
        <strong>water colours</strong> or, doing some{' '}
        <strong>home decor</strong> or making stuff with my hands. I love{' '}
        <strong>learning new things</strong> and <strong>helping others</strong>{' '}
        so that they can experience it as well!
      </>
    ),
  },
  {
    photos: {
      top: craft1,
      middle: craft2,
      bottom: craft3,
    },
    copy: (
      <>
        In my spare time you’ll find me trying different <strong>crafts</strong>{' '}
        taking part in
        <strong> art classes</strong> or making random objects{' '}
        <strong>come to life</strong>. I love{' '}
        <strong>learning new things</strong> and <strong>helping others</strong>{' '}
        so that they can experience it as well!
      </>
    ),
  },
]

const HobbySection = styled('section')`
  display: grid;
  max-width: 600px;
  min-height: calc(100vh - ${props => props.theme.footer.height});
  margin-bottom: ${props => props.theme.footer.height};
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 240px 1fr;
  align-items: center;
  background: ${props => props.theme.color.light};

  .hobby-image {
    grid-column: 1 / 2;
    justify-self: center;
  }

  .open-quote {
    color: ${props => props.theme.color.primary};

    font-size: 230px;
    font-size: 140px;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    padding-left: 20px;
    padding-top: 200px;
    font-weight: 600;
    font-family: auto;
  }

  .hobby-copy {
    grid-row: 2 / 4;
    grid-column: 2 / 3;
    align-self: flex-start;
    padding: 20px 25px;

    /* transform: scale(1, 1.2); */
  }
`

const HobbyCopy = styled(Paragraph)`
  font-weight: 100;
  font-size: 28px;
  line-height: 40px;
  color: ${props => props.theme.color.primary};

  strong {
    font-weight: 500;
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
      <div className="open-quote">“</div>
      <div className="hobby-copy">
        <HobbyCopy>{copy}</HobbyCopy>
      </div>
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
