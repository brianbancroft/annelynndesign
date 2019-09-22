import styled from 'styled-components'

const Paragraph = styled('p')`
  font-family: ${props => props.theme.copy.fontFamily};
  font-weight: ${props => props.theme.copy.fontWeight};
  font-size: ${props => props.theme.copy.fontSize};
  line-height: ${props => props.theme.copy.lineHeight};
  color: ${props =>
    props.color
      ? props.theme.copy.color[props.color]
      : props.theme.copy.color.default};
`

export default Paragraph
