import React, { Component } from "react";
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal'
import {ImageGalleryItemStyled, ImageGalleryItemImage} from './ImageGalleryItem.styled'

export default class ImageGalleryItem extends Component {
  state ={
    showModal: false
  }

  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal
    }))
  }

  render() {
    return <ImageGalleryItemStyled>
    <ImageGalleryItemImage  src={this.props.webformatURL} alt={this.props.tags} onClick={this.toggleModal} />

    {this.state.showModal && <Modal 
    onClose={this.toggleModal} >

      <img src={this.props.largeImageURL} alt={this.props.tags} />

      </Modal>}

  </ImageGalleryItemStyled>
  }
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired
}