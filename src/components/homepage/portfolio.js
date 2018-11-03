import React from 'react'
import styled from 'react-emotion'
import { navigate } from 'gatsby'

const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  margin: 100vh 0;
  display: none;
  padding: 2rem;
  background: #f5f4f4;

  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  background: white;
  @media screen and (min-width: 768px) {
    padding: 4rem;
  }

  @supports (display: grid) {
    display: block;
  }

  .grid {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 150px;
    grid-auto-flow: row dense;
  }
`

const PortfolioItem = styled('div')`
  position: relative;
  display: flex;
  min-height: 150px;
  flex-direction: column;
  justify-content: flex-end;
  box-sizing: border-box;
  min-height: 150px;
  background-color: #0c9a9a;
  color: #fff;
  cursor: pointer;
  grid-column-start: auto;
  grid-row-start: auto;
  background: url('${props => (props.img ? props.img : '')}');
  background-size: cover;
  background-position: center;
  box-shadow: -2px 2px 10px 0px rgba(68, 68, 68, 0.4);
  transition: transform 0.3s ease-in-out;
  counter-increment: item-counter;
  grid-row-end: ${props =>
    props.gridDisplayType == 'medium'
      ? 'span 2'
      : props.gridDisplayType == 'large' || props.gridDisplayType == 'full'
        ? 'span 3'
        : 'inherit'};


  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: scale(1.05);

    &:after {
      opacity: 0;
    }
  }

  /* &--full {
    grid-column-end: auto;

    @media screen and (min-width: 768px) {
      grid-column: 1/-1;
      grid-row-end: span 2;
    }
  } */

  .item__details {
    position: relative;
    z-index: 1;
    padding: 15px;
    color: #444;
    background: #fff;
    text-transform: lowercase;
    letter-spacing: 1px;
    color: #828282;
  }


  .title {

  }

  .date {
    text-align: right;
  }
`

const Portfolio = props => {
  const portfolioItems = props.data.allContentfulPortfolioItem.edges.map(
    (i, key) => (
      <PortfolioItem
        img={i.node.previewImage.file.url}
        gridDisplayType={i.node.gridDisplayType}
        onClick={() => navigate(`/portfolio/${i.node.slug}`)}
        key={key}
      >
        <div className="item__details">
          <div className="title">{i.node.title}</div>
          {/* <div className="date">31 January, 2018</div> */}
        </div>
      </PortfolioItem>
    )
  )

  return (
    <MiddleSection>
      <div className="grid">{portfolioItems}</div>
    </MiddleSection>
  )
}

export default Portfolio
