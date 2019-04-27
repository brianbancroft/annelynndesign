import React from 'react'
import styled from '@emotion/styled'

import linkedinIcon from '../../images/linkedin.svg'
import twitterIcon from '../../images/twitter.svg'
import instagramIcon from '../../images/instagram.svg'

const SocialMediaIcons = styled('section')`
  width: 320px;
  height: 100px;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  cursor: pointer;

  .icon {
    width: 60px;
    height: 60px;
    border-radius: 100px;

    background: ${props => props.icon};
  }
`

const SocialIcons = () => (
  <SocialMediaIcons>
    <img className="icon" src={instagramIcon} />
    <img className="icon" src={twitterIcon} />
    <img className="icon" src={linkedinIcon} />
  </SocialMediaIcons>
)

export default SocialIcons
