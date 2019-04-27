import React from 'react'
import { Contact } from '../components/homepage'
import { Layout } from '../components'
import Helmet from 'react-helmet'
import logo from '../images/logo.png'

const meta = [
  {
    name: 'description',
    property: 'description',
    content: `The Portfolio and Contact Information Anne Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
  },
  {
    name: 'keywords',
    property: 'keywords',
    content: `anne-lynn hanna, annelynn design, anne-lynn design`,
  },
  {
    name: 'theme-color',
    property: 'theme-color',
    content: '#1e9dba',
  },
  {
    property: 'og:title',
    content: 'Contact | Anne-Lynn Design',
  },
  {
    property: 'og:description',
    content: `The Portfolio and Contact Information Anne Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
  },

  {
    property: 'og:url',
    name: 'og:url',
    content: 'https://annelynn.com/contact',
  },
  {
    property: 'twitter:url',
    name: 'twitter:url',
    content: 'https://annelynn.com/contact',
  },
  {
    property: 'og:type',
    name: 'og:type',
    content: 'portfolio',
  },
  {
    property: 'og:image:secure_url',
    name: 'og:image:secure_url',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:image',
    name: 'og:image:secure_url',
    content: `https://annelynn.com/${logo}`,
  },
  {
    name: 'twitter:image:src',
    property: 'twitter:image:src',
    content: `https://annelynn.com/${logo}`,
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: 'Contact | Anne-Lynn Design',
  },
  {
    name: 'twitter:description',
    content: `The Portfolio and Contact Information Anne Lynn Bancroft, a Graphic Designer specializing in packaging and print`,
  },
  {
    name: 'twitter:image',
    content: `https://annelynn.com/${logo}`,
  },
]

const ContactPage = () => {
  return (
    <Layout>
      <Helmet title={`Contact | Anne-Lynn Design`} meta={meta} />
      <Contact />
    </Layout>
  )
}

export default ContactPage
