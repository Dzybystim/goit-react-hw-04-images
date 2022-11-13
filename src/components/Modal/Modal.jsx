import PropTypes from 'prop-types';

import React, { Component } from "react";
import {createPortal} from "react-dom"
import {OverlayStyled, ModalStyled} from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root')

export default class Modal extends Component {

componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
}

componentWillUnmount() {
window.removeEventListener('keydown', this.handleKeyDown)
}

handleKeyDown = event => { 
    if(event.code === 'Escape') {
    this.props.onClose();
 }}

 handleOverLayClick = event => {
    if(event.target===event.currentTarget) {
        this.props.onClose();
    }
 }

    render() {
        return createPortal(<OverlayStyled onClick={this.handleOverLayClick}>
        <ModalStyled>
          {this.props.children}
        </ModalStyled>
      </OverlayStyled>, 
        modalRoot
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}
