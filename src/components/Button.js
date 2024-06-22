import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      {...props} // Spread any additional props
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
