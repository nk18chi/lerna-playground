import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
<<<<<<< HEAD
    <button id='button' className='button-class' data-test-id='button'>
=======
    <button id='button' className='button-class'>
>>>>>>> 2bcd3d98976933229267f9c9aaca74358509b65f
      {label}
    </button>
  );
};

export default Button;
