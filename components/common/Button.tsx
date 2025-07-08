import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
  >
    {label}
  </button>
);

export default Button;
