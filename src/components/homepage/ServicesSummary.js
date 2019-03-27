import React from 'react'
import styled from '@emotion/styled'
import headshotPhoto from '../../images/biopic.jpg'
import linkedinLogo from './linkedin-logo.svg'

const SumamrySection = styled('div')`
  width: 100vw;
  height: 600px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;

  .content {
    width: 800px;
    height: 500px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      margin-left: 30px;
    }
  }
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
  width: 280px;
  height: 280px;
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
  .push {
    margin-left: 16px;
  }
`

const LeftCircle = styled('div')`
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 10000px;
  border: 2px solid ${props => props.theme.color.primary};
  left: 30px;
  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    left: 40px;
  }
`
const RightCircle1 = styled('div')`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 10000px;
  border: 2px solid ${props => props.theme.color.green};
  right: 40px;
  bottom: 45px;
`
const RightCircle2 = styled('div')`
  position: relative;
  width: 220px;
  height: 220px;
  border-radius: 10000px;
  border: 2px solid ${props => props.theme.color.primary};
  right: 90px;
  top: 30px;
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
  width: 48px;
  height: 48px;
  padding-top: 6px;
  border: 2px solid ${props => props.theme.color.secondary};
  border-radius: 54px;
  margin-bottom: 320px;
  display: flex;
  justify-content: center;

  a {
    font-size: 31px;
    font-weight: 700 !important;
    color: ${props => props.theme.color.primary} !important;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    position: relative;
    right: 260px;
  }
`

const ServicesSummary = () => {
  return (
    <SumamrySection>
      <div className="content">
        <LeftCircle />
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
        <RightCircle1 />
        <RightCircle2 />
        <LinkedinLink>
          <a href="https://www.linkedin.com/in/annelynnhanna/" target="_blank">
            <img src={linkedinLogo} width="26px" />
          </a>
        </LinkedinLink>
      </div>
    </SumamrySection>
  )
}

export default ServicesSummary
