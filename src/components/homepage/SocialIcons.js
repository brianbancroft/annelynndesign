import React from 'react'
import styled from 'styled-components'

import { LinkedinLogo, TwitterLogo, InstagramLogo } from '../svg'

const SocialMediaIcons = styled('section')`
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.7);
`

const SocialIcons = () => (
  <SocialMediaIcons>
    <a
      href="https://www.instagram.com/annelynndesign/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <InstagramLogo width="80px" />
    </a>
    <a
      href="https://twitter.com/annelynndesign"
      target="_blank"
      rel="noopener noreferrer"
    >
      <TwitterLogo width="80px" />
    </a>
    <a
      href="https://www.linkedin.com/in/annelynndesign/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <LinkedinLogo width="80px" />
    </a>
  </SocialMediaIcons>
)

export default SocialIcons
