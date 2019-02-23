import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { LowerHeader } from '../styled'

const textAreaStyle = css`
  width: 450px;
  height: 160px;
  margin-top: 8px;
  color: #1e9dba;
  resize: none;

  @media (max-width: 500px) {
    width: 325px;
  }
  @media (min-width: 501px) {
    max-width: 350px;
  }
`

const ContactSection = styled('section')`
  width: 80%;
  height: 100vh;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-left: 0;
    width: 100%;
  }

  label {
    line-height: 2rem;
  }

  .form-container {
    margin-left: 30px;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      width: 325px;
    }
  }

  .contact-form {
    text-transform: uppercase;
    width: 80%;
    font-size: 20px;
    letter-spacing: -0.39px;
    line-height: 49px;
    text-shadow: 0 0 0.2em #fff;
    z-index: 100;
    margin: 0 auto !important;

    @media (max-width: ${props => props.theme.mobileBreakpoint}) {
      margin-left: 0;
    }
    @media (min-width: 501px) {
      max-width: 350px;
    }
  }

  .form-field__text-input {
    width: 450px;
    padding: 20px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    text-transform: uppercase;
    background-color: ${props => props.theme.color.formBackground};
    @media (max-width: 500px) {
      width: 325px;
    }
    @media (min-width: 501px) {
      max-width: 350px;
    }
  }

  .form-field__submit {
    width: 450px;
    color: ${props => props.theme.color.primary};
    text-transform: uppercase;
    font-weight: 600;
    background-color: ${props => props.theme.color.formSubmitBackground};
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    @media (max-width: 500px) {
      width: 325px;
    }
    @media (min-width: 501px) {
      max-width: 350px;
    }
  }

  .form-field__submit:hover {
    transition: 0.6s ease-out;
    background-color: ${props => props.theme.color.tertiary};
  }

  .form-field {
    font-size: 15px;
    padding: 10px 20px;
    border: none;
    background-color: ${props => props.theme.color.formBackground};
  }
`

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 60px;
  width: 80%;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const Contact = () => (
  <ContactSection>
    <Header>Contact</Header>
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
          className={`form-field form-field__textarea`}
          css={[textAreaStyle]}
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
