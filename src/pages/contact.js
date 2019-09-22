import React from 'react'
import { Contact } from '../components/homepage'
import { Layout } from '../components'
import Helmet from 'react-helmet'
import logo from '../images/logo.png'

const meta = [
  {
    name: 'description',
    property: 'description',
    content: `Graphic Design, Signage and Branding from Vancouver Island`,
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
    content: `Graphic Design, Signage and Branding from Vancouver Island`,
  },

  {
    property: 'og:url',
    content: 'https://annelynn.com/contact',
  },
  {
    property: 'twitter:url',
    name: 'twitter:url',
    content: 'https://annelynn.com/contact',
  },

  {
    property: 'og:image:secure_url',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:image',
    content: `https://annelynn.com/${logo}`,
  },
  {
    name: 'twitter:image:src',
    property: 'twitter:image:src',
    content: `https://annelynn.com/${logo}`,
  },
  {
    property: 'og:image:height',
    content: 630,
  },
  {
    property: 'og:image:width',
    content: 1200,
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
    content: `Graphic Design, Signage and Branding from Vancouver Island`,
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
