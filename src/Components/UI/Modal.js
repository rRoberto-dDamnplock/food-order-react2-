import React from 'react';
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

function Backdrop (props) {
return <div className={classes.backdrop} onClick={props.onClose}></div>
}

function ModalOverlay ( props) {
      return <div className={classes.modal}>
<div className={classes.content}>{props.children}</div>
      </div>
}

const portElem = document.getElementById('overlays')
function Modal(props) {
      return (
            <>
{ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portElem )}  
{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portElem)}    
            </>
      );
}

export default Modal;