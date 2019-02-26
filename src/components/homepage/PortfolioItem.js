import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

const ItemLabel = styled('div')`
  position: relative;
  z-index: 1;
  padding: 8px;
  align-self: end;
  height: 40px;
  width: 100%;
  background: rgba(12, 12, 12, 0.4);

  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 500;
  color: #eee;
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
  box-shadow: -0.2px 0.2px 2px 0px rgba(68,68,68,0.4);
  transition: transform 0.3s ease-in-out;
  counter-increment: item-counter;
  border: 2px solid #0c9a9a;

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
    opacity: 0;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      opacity: 1;
      transition: opacity 0.3s ease-in-out;
    }
  }
`

const PortfolioItem = ({
  i: {
    node: { previewImage, slug, title },
  },
} = {}) => {
  const img = previewImage ? previewImage.fixed.url : ''

  return (
    <Link to={`/portfolio/${slug}`}>
      <Item img={img}>
        <ItemLabel>{title}</ItemLabel>
      </Item>
    </Link>
  )
}

export default PortfolioItem