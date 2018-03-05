import React from 'react';

import logo from '../../img/cloud.svg';

const header = ({ title }) => {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='App-title'>{title}</h1>
    </header>
  );
}

export default header;
