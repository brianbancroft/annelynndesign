import React from 'react'
import styled from 'styled-components'
import { ProfileCircle, Paragraph } from '../styled/'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const aboutAssets = [
  {
    photos: {
      top: 'flower1',
      middle: 'flower2',
      bottom: 'flower3',
    },
    copy: (
      <>
        In my spare time you’ll find me tending to my <strong>plants</strong>{' '}
        making <strong>flower arrangements</strong> or experimenting with{' '}
        <strong>cacti</strong>. I love <strong>learning new things</strong> and{' '}
        <strong>helping others</strong> so that they can experience it as well!
      </>
    ),
  },
  {
    photos: {
      top: 'watercolor1',
      middle: 'watercolor2',
      bottom: 'watercolor3',
    },
    copy: (
      <>
        In my spare time you’ll find me dabbing with{' '}
        <strong>water colours</strong> or, doing some{' '}
        <strong>home decor</strong> or making stuff with my hands. I love{' '}
        <strong>learning new things</strong> and <strong>helping others</strong>{' '}
        so that they can experience it as well!
      </>
    ),
  },
  {
    photos: {
      top: 'craft1',
      middle: 'craft2',
      bottom: 'craft3',
    },
    copy: (
      <>
        In my spare time you’ll find me trying different <strong>crafts</strong>{' '}
        taking part in
        <strong> art classes</strong> or making random objects{' '}
        <strong>come to life</strong>. I love{' '}
        <strong>learning new things</strong> and <strong>helping others</strong>{' '}
        so that they can experience it as well!
      </>
    ),
  },
]

const HobbySection = styled('section')`
  display: grid;
  max-width: 600px;
  min-height: calc(100vh - ${props => props.theme.footer.height});
  margin-bottom: ${props => props.theme.footer.height};
  grid-template-rows: 1fr;
  grid-template-columns: 240px 1fr;
  align-items: center;
  background: ${props => props.theme.color.light};

  .hobby-image {
    justify-self: center;
  }

  .hobby-copy {
    grid-column: 2 / 3;
    align-self: flex-start;
    padding: 20px 25px;

    /* transform: scale(1, 1.2); */
  }
`

const HobbyImageContainer = styled('div')`
  grid-column: 1 / 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
`

const HobbyCopy = styled(Paragraph)`
  padding-top: 50px;
  font-weight: 100;
  font-size: 28px;
  line-height: 40px;
  color: ${props => props.theme.color.primary};

  strong {
    font-weight: 500;
  }
`

const HobbyBlurb = () => {
  const imageData = useStaticQuery(graphql`
    query GetHobbyImages {
      watercolor1: file(relativePath: { eq: "watercolour-1.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      watercolor2: file(relativePath: { eq: "watercolour-2.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      watercolor3: file(relativePath: { eq: "watercolour-3.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }

      flower1: file(relativePath: { eq: "flower-1.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      flower2: file(relativePath: { eq: "flower-2.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      flower3: file(relativePath: { eq: "flower-3.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }

      craft1: file(relativePath: { eq: "craft-1.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      craft2: file(relativePath: { eq: "craft-2.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
      craft3: file(relativePath: { eq: "craft-3.jpg" }) {
        childImageSharp {
          fixed(width: 160, height: 160) {
            ...GatsbyImageSharpFixed_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const {
    photos: { top, middle, bottom },
    copy,
  } = aboutAssets[Math.floor(Math.random() * Math.floor(aboutAssets.length))]

  return (
    <HobbySection>
      <div className="hobby-copy">
        <HobbyCopy>{copy}</HobbyCopy>
      </div>
      <HobbyImageContainer>
        <ProfileCircle className="hobby-image">
          {imageData[top] && (
            <Img
              fixed={imageData[top].childImageSharp.fixed}
              className="image"
              alt="This is the first thing that shows off a passion of mine"
            />
          )}
        </ProfileCircle>
        <ProfileCircle className="hobby-image">
          {imageData[middle] && (
            <Img
              fixed={imageData[middle].childImageSharp.fixed}
              className="image"
              alt="This is the second thing that shows off a passion of mine"
            />
          )}
        </ProfileCircle>
        <ProfileCircle className="hobby-image">
          {imageData[bottom] && (
            <Img
              fixed={imageData[bottom].childImageSharp.fixed}
              className="image"
              alt="This is the third thing that shows off a passion of mine"
            />
          )}
        </ProfileCircle>
      </HobbyImageContainer>
    </HobbySection>
  )
}

export default HobbyBlurb
