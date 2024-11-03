// src/components/Button.js

import React from 'react';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
