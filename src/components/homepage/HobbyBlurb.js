import React from 'react'
import styled from '@emotion/styled'
import { ProfileCircle } from '../styled/'

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
  return (
    <HobbySection>
      <div className="hobby-copy">
        In my spare time you’ll find me tending to my <strong>plants</strong>{' '}
        making <strong>flower arrangements</strong> or{' '}
        <strong>making stuff with my hands</strong>. I love learning new things
        and helping others experience it as well is part of the fun!
      </div>
      <ProfileCircle className="hobby-image">
        <div className="image" />
      </ProfileCircle>
      <ProfileCircle className="hobby-image">
        <div className="image" />
      </ProfileCircle>
      <ProfileCircle className="hobby-image">
        <div className="image" />
      </ProfileCircle>
    </HobbySection>
  )
}

export default HobbyBlurb
