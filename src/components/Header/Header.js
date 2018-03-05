import React from 'react';
import PropTypes from 'prop-types';

import logo from '../../img/cloud.svg';

const header = ({ title }) => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <h1 className="App-title">{title}</h1>
  </header>
);

header.propTypes = {
  title: PropTypes.string,
};

header.defaultProps = {
  title: '',
};

export default header;
