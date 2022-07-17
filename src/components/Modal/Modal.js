import React from "react";
import ReactDOM from "react-dom";
import './Modal.scss';

export default function Modal(props) {
  if (!props.open) return null;
  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button onClick={props.onClose} className="btn-close">Close</button>
        {props.children}
      </div>
    </>,
    document.getElementById('portal')
  )
}