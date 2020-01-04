import styled from 'styled-components'

// Header used on frontpage's contact and about
const LowerHeader = styled('div')`
  text-transform: ${props => props.theme.h2.textTransform};
  font-weight: 900;
  font-size: 2.1rem;
  line-height: ${props => props.theme.h2.lineHeight};
  text-shadow: ${props => props.theme.h2.textShadow};
  color: ${props => props.theme.color.copy};
  padding-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.8);
`

export default LowerHeader
