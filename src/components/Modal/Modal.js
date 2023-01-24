import React from 'react';

import './Modal.css';

const modal = (props) => {
  const cssClasses = ['Modal', 'ModalOpen'];

  return (
    <div className="Modal ModalOpen">
      <h1>A Modal</h1>
      <button className="Button" onClick={props.closed}>
        Dismiss
      </button>
    </div>
  );
};

export default modal;
