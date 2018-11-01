import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'
import styled, { css } from 'react-emotion'
import { Header } from '../components/homepage'

const textAreaStyle = css`
  font-size: 14px;
  width: 348px;
  height: 160px;
  padding: 10px;
  color: #1e9dba;
  background-color: #ebfafe;
  border: none;
  resize: none;
`

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
const FooterSection = styled('section')`
  width: 100vw;
  height: 100vh;
  z-index: -1;
  top: 0;
  position: fixed;

  div {
    width: 50%;
    height: 100%;
  }

  .left {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
  }
  .right {
  }
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

class IndexPage extends Component {
  handleScroll() {
    const body = document.body
    const html = document.documentElement
    const height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )
    const offset = window.pageYOffset
    const headerSection = document.getElementById('headerSection')
    const footerSection = document.getElementById('footerSection')
    if (headerSection || footerSection) {
      if (height / offset > 2.9763313609467454) {
        headerSection.style.display = 'block'
        footerSection.style.display = 'none'
      } else {
        headerSection.style.display = 'none'
        footerSection.style.display = 'flex'
      }
    }
  }

  componentDidMount() {
    this.handleScroll()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    const porfolioItems = this.props.data.allContentfulPortfolioItem.edges.map(
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
      <main>
        <Header />
        <MiddleSection>
          <PortfolioItemContainer>{porfolioItems}</PortfolioItemContainer>
        </MiddleSection>
        <FooterSection id="footerSection">
          <div className="left">
            <h1>Contact</h1>
            <form
              name="contact"
              action=""
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              Name:
              <br />
              <input type="text" name="name" />
              <br />
              Email:
              <br />
              <input type="email" name="email" />
              <br />
              <textarea
                className={`${textAreaStyle}`}
                name="comment"
                form="usrform"
                defaultValue="Hi there, I just saw your site and I'd like to talk more!"
              />
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
          <div className="right">
            <h1>About</h1>
            <div className="copy">
              <p>
                I am from the Ottawa River Valley, and have been a designer
                since 2007 in in-house, agency and contracting roles for both
                print and packaging design
              </p>
              <p>
                I have been a designer since 2007, and keep constant through
                research, and high-tempo production
              </p>
              <p>
                My personal interests in graphic design include "print",
                "colour". I love seeing my designs, and keep a collection of my
                favorite products which I've helped bring to life.
              </p>
            </div>
          </div>
        </FooterSection>
      </main>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPortfolioItem {
      edges {
        node {
          id
          title
          slug
          createdAt(formatString: "MMM Do, YYYY")
          previewImage {
            id
            description
            file {
              url
              contentType
            }
          }
        }
      }
    }
  }
`
