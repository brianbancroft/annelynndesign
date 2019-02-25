import React from 'react'
import styled from '@emotion/styled'
import headshotPhoto from '../../images/biopic.jpg'
import linkedinLogo from './linkedin-logo.svg'

const SumamrySection = styled('div')`
  width: 100vw;
  height: 100vh;
  display: none;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    display: block;
  }
`

const HeadshotCircle = styled('div')`
  top: 20px;
  left: 55px;
  z-index: 2;
  width: 166px;
  height: 166px;
  border-radius: 166px;
  padding: 6px;

  border: 2px solid ${props => props.theme.color.secondary};
`

const Headshot = styled('div')`
  width: 150px;
  height: 150px;
  border-radius: 150px;
  background-image: url(${headshotPhoto});
  background-repeat: no-repeat;
  background-size: contain;
`

const SpacerCircle = styled('div')`
  top: 140px;
  left: 180px;
  z-index: 1;

  width: 107px;
  height: 107px;
  border: 2px solid ${props => props.theme.color.green};
  border-radius: 107px;
`

const SpecializationsCircle = styled('div')`
  top: 220px;
  left: 30px;
  padding: 40px 0 0 60px;
  width: 259px;
  height: 259px;
  border: 2px solid ${props => props.theme.color.secondary};
  border-radius: 259px;

  h4,
  span {
    color: ${props => props.theme.color.primary};
    text-transform: uppercase;
  }

  ul {
    margin-bottom: 0;
    margin-left: 2px;
  }

  h4 {
    margin-bottom: 2px;
  }
  .push:before {
    margin-left: 2px;
  }
`

const ListItem = styled('li')`
  list-style-type: none;
  margin-bottom: 2px;

  &:before {
    color: ${props => props.theme.color.green};
    margin-right: 8px;
    font-size: 18px;

    content: '•';
  }
`

const LinkedinLink = styled('div')`
  position: absolute;
  top: 500px;
  left: 260px;
  width: 46px;
  height: 46px;
  border: 2px solid ${props => props.theme.color.secondary};
  border-radius: 46px;
  padding: 7px 0 0 8px;

  a {
    font-size: 31px;
    font-weight: 700 !important;
    color: ${props => props.theme.color.primary} !important;
  }
`

const ServicesSummary = () => {
  return (
    <SumamrySection>
      {/* <HeadshotCircle> */}
      {/* <Headshot /> */}
      {/* </HeadshotCircle> */}
      {/* <SpacerCircle /> */}
      <SpecializationsCircle>
        <h4>Specializing</h4>
        <ul>
          <ListItem>
            <span>retail design</span>
          </ListItem>
          <ListItem>
            <span>packaging</span>
          </ListItem>
          <ListItem>
            <span>branding</span>
          </ListItem>
          <ListItem>
            <span>signage</span>
          </ListItem>
          <ListItem>
            <span>flyer design</span>
          </ListItem>
        </ul>
        <span className="push">& more</span>
      </SpecializationsCircle>

      {/* <LinkedinLink>
        <a href="https://www.linkedin.com/in/annelynnhanna/" target="_blank">
          <img src={linkedinLogo} width="26px" />
        </a>
      </LinkedinLink> */}
    </SumamrySection>
  )
}

export default ServicesSummary
