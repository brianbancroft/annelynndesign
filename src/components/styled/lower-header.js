import styled from '@emotion/styled'

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
`

export default LowerHeader
