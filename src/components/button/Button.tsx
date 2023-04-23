import React, { ButtonHTMLAttributes } from 'react';
import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button = ({ label, className, ...rest }: ButtonProps) => {
  return (
    <button className="button" {...rest}>
      {label}
    </button>
  );
};
