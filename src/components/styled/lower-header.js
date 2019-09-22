import styled from 'styled-components'

// Header used on frontpage's contact and about
const LowerHeader = styled('div')`
  text-transform: ${props => props.theme.h2.textTransform};
  font-weight: ${props => props.theme.h2.fontWeight};
  font-size: ${props => props.theme.h2.fontSize};
  line-height: ${props => props.theme.h2.lineHeight};
  text-shadow: ${props => props.theme.h2.textShadow};
  text-align: ${props => props.theme.h2.textAlign};
  letter-spacing: ${props => props.theme.h2.letterSpacing};
  color: ${props => props.theme.color.primary};
  padding-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`

export default LowerHeader
