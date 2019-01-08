import React, { Component } from 'react'
import styled from 'react-emotion'

const Modal = styled('div')`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 123;
  top: 0;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  animation: fadein 1s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h1.title {
    text-align: center;
    height: 20vh;
    width: 100vw;
    margin-top: 15px;
  }

  .image-container {
    height: 80vh;
    width: 100vw;
    min-height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: ease-out 2s;

    img {
      max-width: 80vw;
      max-height: 80vh;
    }
  }
`
const ImageModal = ({ title, modalImage, display, handleClose }) => {
  return display ? (
    <Modal onClick={handleClose}>
      <h1 className="title">{title}</h1>
      <div className="image-container">
        <img src={modalImage} />
      </div>
    </Modal>
  ) : (
    <></>
  )
}

export default ImageModal
