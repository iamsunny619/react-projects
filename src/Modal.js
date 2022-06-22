import React from "react";

const Modal = ({ children, handleClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal">{children}</div>
      <button onClick={handleClose}>Close</button>
    </div>
  );
};

export default Modal;
