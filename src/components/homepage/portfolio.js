import React from 'react'
import styled from 'react-emotion'
import { Link } from 'gatsby'

const MiddleSection = styled('section')`
  width: 100vw;
  min-height: 100vh;
  margin: 100vh 0;
  padding: 30px 60px;
  color: #f973ff;
  border-top: 2px solid #333;
  border-bottom: 2px solid #333;
  background: white;
`

const PortfolioItemContainer = styled('div')`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const PortfolioItem = styled('div')`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  margin-bottom: 30px;
  border-radius: 20px;
  background-image: url('${props => props.img.file.url}');
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: flex-end;

  .copy-container {
    min-height: 50px;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 9px 5px 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .copy-container .title {
    font-size: 18px;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 5px;
  }

  .copy-container .date {
    font-size: 10px;
    text-align: right;
  }
`

const Portfolio = props => {
  const porfolioItems = props.data.allContentfulPortfolioItem.edges.map(
    (i, key) => {
      return (
        <Link key={key} to={`/portfolio/${i.node.slug}`}>
          <PortfolioItem img={i.node.previewImage}>
            <div className="copy-container">
              <div className="title">{i.node.title}</div>
              <div className="date">31 January, 2018</div>
            </div>
          </PortfolioItem>
        </Link>
      )
    }
  )

  return (
    <MiddleSection>
      <PortfolioItemContainer>{porfolioItems}</PortfolioItemContainer>
    </MiddleSection>
  )
}

export default Portfolio
