import React, { useState } from "react";
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal'
import {ImageGalleryItemStyled, ImageGalleryItemImage} from './ImageGalleryItem.styled'

export default function ImageGalleryItem({webformatURL, largeImageURL, tags}) {
  let [showModal, setShowModal] = useState(false)
 

const  toggleModal = () => {
  setShowModal(!showModal)
  }

 
    return <ImageGalleryItemStyled>
    <ImageGalleryItemImage  src={webformatURL} alt={tags} onClick={toggleModal} />

    {showModal && <Modal onClose={toggleModal} >
      <img src={largeImageURL} alt={tags} />
      </Modal>}

  </ImageGalleryItemStyled>
  
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired
}