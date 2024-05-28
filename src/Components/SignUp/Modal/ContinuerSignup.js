import React from 'react';
import SignUp from '../SignupWithWhatsapp/Continuersignup';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <SignUp/>
      </div>
    </div>
  );
};

export default Modal;