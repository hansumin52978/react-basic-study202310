import React from 'react';
import ReactDOM from 'react-dom';

const Portal = ({ children: renderComponent, destId }) => {
  return ReactDOM.createPortal(
    //전달하고자 하는 요소
    renderComponent,
    document.getElementById(destId)
  );
};

export default Portal;
