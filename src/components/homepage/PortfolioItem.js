import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { isMobile } from 'react-device-detect'

const ItemLabel = styled('div')`
  position: relative;
  z-index: 1;
  padding: 8px;
  align-self: end;
  height: 40px;
  width: 100%;
  background: rgba(12, 12, 12, 0.65);

  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 500;
  color: #eee;

  p {
    margin: 0;
  }

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    height: 70px;
    padding-top: 10px;
  }
`

const Item = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  min-height: 300px;
  background-color: #0c9a9a;
  color: #fff;
  cursor: pointer;
  grid-column-start: auto;
  grid-row-start: auto;
  background: url('${props => (props.img ? props.img : '')}');
  background-size: cover;
  background-position: center;
  /* box-shadow: 2px 1px 1px rgba(68,68,68,0.4); */
  transition: transform 0.3s ease-in-out;
  counter-increment: item-counter;
  border: 1px solid #eee;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    min-height: 190px;
    height: 190px;
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
      background: rgba(12, 154, 154, 0.9);
      transition: background 0.5s ease-in-out;

    }

    ${ItemLabel} {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }

  ${ItemLabel} {

    ${() =>
      isMobile
        ? css`
            opacity: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          `
        : css`
            opacity: 0;
            display: none;
          `}
  }
`

const PortfolioItem = ({
  i: {
    node: { previewImage, slug, title },
  },
} = {}) => {
  const img = previewImage ? previewImage.fixed.url : ''
  console.log('Is it mobile? ', isMobile)

  return (
    <Link to={`/portfolio/${slug}`}>
      <Item img={img}>
        <ItemLabel>
          <p>{title}</p>
        </ItemLabel>
      </Item>
    </Link>
  )
}

export default PortfolioItem
