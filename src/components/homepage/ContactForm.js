import React from 'react'
import styled from '@emotion/styled'
import { LowerHeader } from '../styled'

const ContactSection = styled('section')`
  width: 100%;
  height: 100vh;
  margin-left: 0 auto;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    margin-left: 0;
    width: 100%;
  }

  label {
    line-height: 2rem;
    text-transform: uppercase;
  }
`

const Header = styled(LowerHeader)`
  z-index: 10;
  padding-top: 30px;
  margin-bottom: 60px;
  width: 100%;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 100%;
  }
`

const FormContainer = styled('div')`
  margin: 0 auto;
  width: 350px;

  @media (max-width: ${props => props.theme.mobileBreakpoint}) {
    width: 325px;
    margin: 0 auto;
  }
`

const FormInput = styled('input')`
  font-size: 15px;
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.theme.color.formBackground};
  width: 450px;
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
`

const SubmitInput = styled('input')`
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

  &:hover {
    transition: 0.6s ease-out;
    background-color: ${props => props.theme.color.tertiary};
  }
`

const TextInput = styled('textarea')`
  width: 450px;
  height: 160px;
  margin-top: 8px;
  color: #1e9dba;
  resize: none;
  font-size: 15px;
  padding: 10px 20px;
  border: none;
  background-color: ${props => props.theme.color.formBackground};

  @media (max-width: 500px) {
    width: 325px;
  }
  @media (min-width: 501px) {
    max-width: 350px;
  }
`

const ContactForm = () => (
  <ContactSection>
    <Header>Contact</Header>
    <FormContainer>
      <form
        name="contact-form"
        action=""
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <label>name</label>
        <FormInput type="text" name="name" />
        <label>email</label>
        <FormInput type="text" name="email" />
        <label>message</label>

        <TextInput
          name="comment"
          form="usrform"
          defaultValue="Hi there, I just saw your site and I'd like to talk more!"
        />

        <SubmitInput className="form-field__submit" type="SUBMIT" />
      </form>
    </FormContainer>
  </ContactSection>
)

export default ContactForm
