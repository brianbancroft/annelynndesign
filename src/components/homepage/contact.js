import React from 'react'
import styled, { css } from 'react-emotion'

const textAreaStyle = css`
  font-size: 18px;
  width: 90%;
  height: 160px;
  padding: 10px;
  color: #1e9dba;
  background-color: #ebfafe;
  border: none;
  resize: none;
`

const ContactSection = styled('section')`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  display: grid;
  grid-template-rows: 80px 80%;
  grid-row-gap: 40px;
  flex-direction: column;
  color: #1e9dba;
  font-family: AvenirNext-UltraLight;

  .header {
    z-index: 10;
    text-transform: uppercase;
    font-family: AvenirNext-UltraLight;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    padding-top: 30px;
    padding-left: 20px;
    margin-bottom: 20px;
  }

  .contact-form {
    text-transform: uppercase;
    font-family: AvenirNext-UltraLight;
    font-size: 20px;
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
    color: #1e9dba;
    text-transform: uppercase;
    font-weight: 600;
    background-color: rgba(30, 157, 186, 0.25);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
  }

  .form-field__submit:hover {
    background-color: #8ec73f;
    transition: 0.6s ease-out;
  }

  .form-field {
    font-family: AvenirNext-UltraLight;
    font-size: 15px;
    padding: 10px 20px;
    background-color: rgba(30, 157, 186, 0.1);
    border: none;
  }

  .contact {
    width: 60%;
  }
`

const Contact = () => (
  <ContactSection>
    <div className="header">Contact</div>
    <div className="form">
      <form
        name="contact"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>NAME</label>
        <br />
        <input
          type="text"
          name="name"
          className="form-field form-field__text-input"
        />
        <br />
        <label>EMAIL</label>
        <br />
        <input
          type="text"
          name="email"
          className="form-field form-field__text-input"
        />

        <label>MESSAGE</label>
        <br />
        <textarea
          className={`form-field form-field__textarea ${textAreaStyle}`}
          name="comment"
          form="usrform"
          defaultValue="Hi there, I just saw your site and I'd like to talk more!"
        />

        <input className="form-field__submit" type="SUBMIT" />
      </form>
    </div>
  </ContactSection>
)

export default Contact
