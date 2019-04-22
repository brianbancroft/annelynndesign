import styled from '@emotion/styled'

const ProfileCircle = styled('div')`
  width: 180px;
  height: 180px;
  border-radius: 180px;
  border: 1px solid #aaa;

  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    width: 160px;
    height: 160px;
    border-radius: 160px;
    background: #ddd;
    background-image: ${props => props.imageSrc};
  }
`

export default ProfileCircle
