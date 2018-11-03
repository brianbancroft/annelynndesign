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

  grid-template-columns: 50vw 50vw;
  grid-template-rows: 100vh;

  .left,
  .right {
    width: 100%;
    height: 100%;
  }

  .left {
    padding-left: 40px;
    display: flex;
    flex-direction: column;
  }
  .right {
  }

  .contact__copy {
    text-transform: uppercase;
    font-family: AvenirNext-UltraLight;
    font-size: 40px;
    color: #1e9dba;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 10;
    padding-top: 30px;
    padding-left: 20px;
  }

  .contact-form {
    text-transform: uppercase;
    font-family: AvenirNext-UltraLight;
    font-size: 20px;
    color: #1e9dba;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 10;
  }

  .form-field__text-input {
    width: 90%;
    padding: 20px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    background-color: rgba(30, 157, 186, 0.1);
    text-transform: uppercase;
  }

  .form-field__submit {
    width: 90%;
    background-color: rgba(30, 157, 186, 0.25);
    color: #1e9dba;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
  }

  .form-field__submit:hover {
    background-color: #8ec73f;
  }

  .form-field {
    font-family: AvenirNext-UltraLight;
    font-size: 15px;
    padding: 10px 20px;
    color: #1e9dba;
    background-color: rgba(30, 157, 186, 0.1);
    border: none;
  }

  .contact {
    width: 60%;
  }

  .about__image-copy {
    display: flex;
    flex-direction: row;
  }

  .about__about-header {
    font-family: AvenirNext-UltraLight;
    font-size: 40px;
    color: #1e9dba;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 10;
    padding-top: 30px;
  }

  .about__about-copy {
    text-transform: lowercase;
    font-family: AvenirNext-UltraLight;
    font-size: 14px;
    color: #1e9dba;
    line-height: 17px;
    padding: 20px;
  }

  .about__about-image {
    border: 1px solid #8ec73f;
    height: 150px;
    width: 150px;
    border-radius: 600px;
    overflow: hidden;
    float: left;
    z-index: 1;
  }

  .about-circle {
    border: 1px solid #006a77;
    position: absolute;
  }

  .about-circle__circle-one {
    border: 1px solid #1e9dba;
    height: 700px;
    width: 700px;
    position: absolute;
    left: 600px;
    top: 1350px;
    border-radius: 50%;
    z-index: -1;
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
          <label>NAME</label>
          <input
            type="text"
            name="name"
            className="form-field form-field__text-input"
          />
          <label>EMAIL</label>
          <input
            type="text"
            name="email"
            className="form-field form-field__text-input"
          />

          <label>MESSAGE</label>
          <br />
          <textarea
            className="form-field form-field__textarea"
            className={`${textAreaStyle}`}
            name="comment"
            form="usrform"
            defaultValue="Hi there, I just saw your site and I'd like to talk more!"
          />

          <input className="form-field__submit" type="SUBMIT" />
        </form>
      </div>
      <div className="right">
        <div className="about">
          <div className="about__about-header">ABOUT</div>

          <div className="about__image-copy">
            <div className="about__about-image">
              <img src="https://placekitten.com/150//150" />
            </div>
            <div className="about__about-copy">
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

          <div className="about-circle__circle-one" />
        </div>
      </div>
    </FooterSection>
  )
}

export default Footer
