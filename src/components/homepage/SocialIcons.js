import React from 'react'
import styled from '@emotion/styled'

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
    background: #444;
  }
`

const SocialIcons = () => (
  <SocialMediaIcons>
    <div className="icon" />
    <div className="icon" />
    <div className="icon" />
  </SocialMediaIcons>
)

export default SocialIcons
