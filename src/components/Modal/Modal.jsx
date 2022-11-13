import PropTypes from 'prop-types';

import React, { useEffect } from "react";
import {createPortal} from "react-dom"
import {OverlayStyled, ModalStyled} from "./Modal.styled"

const modalRoot = document.querySelector('#modal-root')

export default function Modal({onClose, children}) {

useEffect(() => {

    const handleKeyDown = event => { 
        if(event.code === 'Escape') {
        onClose();
     }}

     window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown)

    }
}, [onClose]);


const handleOverLayClick = event => {
    if(event.target===event.currentTarget) {
        onClose();
    }
 }


        return createPortal(<OverlayStyled onClick={handleOverLayClick}>
        <ModalStyled>
          {children}
        </ModalStyled>
      </OverlayStyled>, 
        modalRoot
        )
    }

Modal.propTypes = {
    onClose: PropTypes.func.isRequired
}
