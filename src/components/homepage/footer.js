import React from 'react'
import styled, { css } from 'react-emotion'

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

const Footer = () => {
  return (
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
            I am from the Ottawa River Valley, and have been a designer since
            2007 in in-house, agency and contracting roles for both print and
            packaging design
          </p>
          <p>
            I have been a designer since 2007, and keep constant through
            research, and high-tempo production
          </p>
          <p>
            My personal interests in graphic design include "print", "colour". I
            love seeing my designs, and keep a collection of my favorite
            products which I've helped bring to life.
          </p>
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
