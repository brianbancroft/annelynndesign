import React, { useState } from 'react'
import { Layer, Box, Button } from 'grommet'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { PortfolioItem } from '.'

const ModalContainer = styled('section')`
  width: 100vw;
  padding: 10px;

  height: ${props => `calc(100vh - ${props.theme.footer.height})`};
  margin-bottom: ${props => props.theme.footer.height};

  background: ${props => props.theme.color.dark};
  color: white;

  display: grid;

  grid-template-rows: 50px 0.4fr 2.5rem 1fr;
  grid-template-columns: 1fr 0.75fr 0.25fr;
  grid-column-gap: 20px;
  grid-row-gap: 10px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${props => `calc(100vh - ${props.theme.footer.mobile.height})`};
    grid-row-gap: 10px;

    grid-template-columns: 1fr;
    grid-template-rows: 50px 47vh 2.5rem 1fr;
  }
`

const ExitInstruction = styled('div')`
  grid-row: 1 / 2;
  grid-column: 1 /1;
  justify-self: start;
  color: white;
  border: 2px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  line-height: 35px;

  transition: color 0.25s ease-in-out, border 0.25s ease-in-out;

  user-select: none;
  cursor: pointer;
  font-size: 25px;
  margin-left: 5px;

  &:hover {
    color: ${props => props.theme.color.tertiary};
    border: 2px solid ${props => props.theme.color.tertiary};
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    font-size: 30px;
    grid-row: 1 / 2;

    color: ${props => props.theme.color.tertiary};
    border: 2px solid ${props => props.theme.color.tertiary};
  }
`

const ImageContainer = styled('div')`
  grid-row: 1 / 5;
  grid-column: 1 / 2;
  padding: 10px;
  align-self: center;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    max-width: 70vw;
    margin-left: 15vw;
    margin-top: 20px;
  }
`

const TitleContainer = styled('div')`
  grid-column: 2 / 4;
  grid-row: 3 / 4;

  font-weight: 200;
  font-size: 2.5rem;
  color: ${props => props.theme.color.tertiary};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    border-top: 1px solid ${props => props.theme.color.tertiary};
    padding-top: 8px;
    margin-top: 3px;
    margin-bottom: 3px;
    padding-left: 5px;
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    font-size: 2rem;
  }
`

const CopyContainer = styled('div')`
  grid-column: 2 / 4;
  grid-row: 4 / 5;

  font-weight: 500;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
    padding-left: 5px;
  }
`

const PortfolioSample = item => {
  const [overlay, setOverlay] = useState(false)

  const {
    i: {
      node: {
        previewImage,
        title,
        sampleImage,
        copy: { copy },
      },
    },
  } = item

  return (
    <>
      {overlay && (
        <Layer
          animation="slide"
          onEsc={() => setOverlay(false)}
          onClickOutside={() => setOverlay(false)}
        >
          {' '}
          <ModalContainer>
            <ExitInstruction onClick={() => setOverlay(false)}>
              Close
            </ExitInstruction>
            <ImageContainer>
              {sampleImage && <Img fluid={sampleImage.fluid} />}
            </ImageContainer>
            <TitleContainer>{title}</TitleContainer>
            <CopyContainer>{copy}</CopyContainer>
          </ModalContainer>
        </Layer>
      )}
      <div
        onClick={() => {
          setOverlay(true)
        }}
      >
        <PortfolioItem previewImage={previewImage} title={title} sample />
      </div>
    </>
  )
}

export default PortfolioSample
