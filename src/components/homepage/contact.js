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

const ContactSection = styled('section')`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  display: flex;
  flex-direction: column;

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
`

const Contact = () => (
  <ContactSection>
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
  </ContactSection>
)

export default Contact
