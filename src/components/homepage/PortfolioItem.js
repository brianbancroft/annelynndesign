import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'

const ItemLabel = styled('div')`
  position: relative;
  z-index: 100;
  padding: 8px;
  align-self: end;
  height: 40px;
  width: 100%;
  background: rgba(12, 12, 12, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  font-weight: 500;
  color: #eee;

  p {
    letter-spacing: 1px;
    margin: 0;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    opacity: 0;
    display: none;
  }
`

const Item = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  background-color: #0c9a9a;
  color: #fff;
  cursor: pointer;
  grid-column-start: auto;
  grid-row-start: auto;
  height: 100%;

  /* box-shadow: 2px 1px 1px rgba(68,68,68,0.4); */
  transition: transform 0.3s ease-in-out;
  counter-increment: item-counter;
  border: 1px solid #eee;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    /* height: 190px; */
    width: 45vw;
    height: 45vw;
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      background: none;
    }
  }

  &:hover {
    &:after {
      background: ${props => props.theme.color.primary};
      transition: background 0.5s ease-in-out;
    }

    ${ItemLabel} {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }

  ${Img}, ${ItemLabel} {
    display: flex;
    margin: 0 auto;

    /* z-index: 10;

    opacity: 1;
    display: flex;
    align-items: center;
    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      opacity: 0;
      display: none;
    } */
  }
`

const PortfolioItem = ({ previewImage, title }) => {
  return (
    <Item>
      {previewImage && <Img fluid={previewImage.fluid} />}
      {/* <ItemLabel>
        <p>{title}</p>
      </ItemLabel> */}
    </Item>
  )
}

export default PortfolioItem
