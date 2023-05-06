import React from 'react';

const  Button = ({ type = 'submit',
className = '',
clickMe,
processing,
children }) => (
  <button
  type={type}
  onClick={clickMe}
 
  className={
    ` form-control
    text-center
    block
    w-full
    px-3
    py-1.5
    text-md
    bg-clip-padding
    border border-solid  border-secondary
    rounded-[0.9rem]
    transition
    ease-in-out
    m-0
    focus:outline-none${
      processing && 'opacity-25'
    } ` + className
   
  }
  disabled={processing}
>
  {children}
</button>
);
export default  Button;