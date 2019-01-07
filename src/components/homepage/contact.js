import React from 'react'
import styled, { css } from 'react-emotion'

const textAreaStyle = css`
  width: 450px;
  height: 160px;
  margin-top: 8px;
  color: #1e9dba;
  resize: none;

  @media (max-width: 500px) {
    width: 70vw;
  }
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

  @media (max-width: 620px) {
    padding-left: 0 10px;
    width: 80vw;
  }

  label {
    line-height: 2rem;
  }

  .header {
    z-index: 10;
    text-transform: uppercase;
    font-family: 'Raleway', sans-serif;
    font-weight: 100;
    font-size: 50px;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    padding-top: 30px;
    padding-left: 20px;
    margin-left: 50px;
    margin-bottom: 20px;
  }

  .contact-form {
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 100;
    margin: 0 auto !important;

    @media (max-width: 620px) {
      margin-left: 0;
    }
  }

  .form-field__text-input {
    width: 450px;
    padding: 20px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    background-color: rgba(30, 157, 186, 0.1);
    text-transform: uppercase;
    @media (max-width: 500px) {
      width: 80vw;
    }
  }

  .form-field__submit {
    width: 450px;
    color: #1e9dba;
    text-transform: uppercase;
    font-weight: 600;
    background-color: rgba(30, 157, 186, 0.25);
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    @media (max-width: 500px) {
      width: 80vw;
    }
  }

  .form-field__submit:hover {
    background-color: #8ec73f;
    transition: 0.6s ease-out;
  }

  .form-container {
    width: 500px;
    margin: 0 auto;
  }

  .form-field {
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
    <div className="form-container">
      <form
        name="contact-form"
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
        <br />
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
