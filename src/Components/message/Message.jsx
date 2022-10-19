import React from 'react';
import './message.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const Message = ({ showPopup, setShowPopup }) => {
  React.useEffect(() => {
    setTimeout(() => {
      setShowPopup(!showPopup);
    }, 1200);
  }, [showPopup, setShowPopup]);

  return (
    <div className="message__container">
      <div className="message">
        <div className="message__icon">
          <AiFillCheckCircle />
        </div>
        <div className="message__text">
          <span>Mensagem enviada com sucesso!</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
