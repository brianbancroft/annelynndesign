import React, { useState } from 'react'
import { Layer } from 'grommet'
import styled from 'styled-components'
import Img from 'gatsby-image'

import { PortfolioItem } from '.'

const ModalContainer = styled('section')`
  width: 100vw;
  padding: 10px;

  height: ${props => `calc(100vh - ${props.theme.footer.height})`};
  margin-bottom: ${props => props.theme.footer.height};

  z-index: 800;
  background: ${props => props.theme.color.dark};
  color: white;

  display: grid;

  grid-template-rows: 30px 0.4fr 2.5rem 1fr;
  grid-template-columns: 1fr 0.75fr 0.25fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: ${props => `calc(100vh - ${props.theme.footer.mobile.height})`};
    margin-bottom: ${props => props.theme.footer.mobile.height};
  }
`

const ExitInstruction = styled('div')`
  grid-row: 1 / 2;
  grid-column: 3 /4;
  justify-self: end;
  color: white;

  transition: color 0.35s ease-in-out;
  user-select: none;
  cursor: pointer;
  font-size: 40px;

  &:hover {
    color: ${props => props.theme.color.tertiary};
  }
`

const ImageContainer = styled('div')`
  grid-row: 1 / 5;
  grid-column: 1 / 2;
  padding: 10px;
  align-self: center;
`

const TitleContainer = styled('div')`
  grid-column: 2 / 4;
  grid-row: 3 / 4;

  font-weight: 200;
  font-size: 2.5rem;
`

const CopyContainer = styled('div')`
  grid-column: 2 / 4;
  grid-row: 4 / 5;

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
              X
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
