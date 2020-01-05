import React, { useState } from 'react'
import { Layer } from 'grommet'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { PortfolioItem } from '.'

const ModalContainer = styled('section')`
  width: 100vw;
  padding: 0 10px;

  height: ${props => `calc(100vh - ${props.theme.footer.mobile.height})`};
  margin-bottom: ${props => props.theme.footer.mobile.height};

  z-index: 800;
  background: ${props => props.theme.color.dark};
  color: white;

  display: grid;

  grid-template-rows: 30px 1fr 20px 40px 120px 0.25fr;
  grid-template-columns: 1fr 20px 0.25fr 0.25fr 0.25fr 0.25fr;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${props => `calc(100vh - ${props.theme.footer.mobile.height})`};
    margin-bottom: ${props => props.theme.footer.mobile.height};
  }
`

const ExitInstruction = styled('div')`
  grid-row: 1 / 2;
  grid-column: 6 / 7;
  color: white;

  transition: color 0.35s ease-in-out;
  user-select: none;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.color.tertiary};
  }
`

const ImageContainer = styled('div')`
  width: 100%;
  height: 100%;
  grid-row: 2 / 5;
  grid-column: 1 / 2;
`
const TitleContainer = styled('div')`
  grid-column: 3 / 7;
  grid-row: 3 / 4;

  font-weight: 200;
  font-size: 2.5rem;
`

const CopyContainer = styled('div')`
  grid-column: 3 / 7;
  grid-row: 5 / 6;

  font-weight: 500;
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
              Click to exit
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
        <PortfolioItem previewImage={previewImage} title={title} />
      </div>
    </>
  )
}

export default PortfolioSample
