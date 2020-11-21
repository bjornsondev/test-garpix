import React from 'react';
import s from './FilledButton.module.scss';
import cs from '../Common.module.scss';



function FilledButton({className, children, ...props}){
  return (
    <button 
      {...props} 
      className={cs.commonBtn + " " + s.btn + " " + className}
    >{children}</button>
  )
};

export default FilledButton;