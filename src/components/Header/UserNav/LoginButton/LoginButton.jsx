import { useState } from 'react';

import s from './LoginButton.module.scss';

import StrokedButton from '../../../Buttons/StrokedButton/StrokedButton';



function LoginButton(){
  const [isDefinedUser, setIsDefinedUser] = useState(false);
  
  return (
    <StrokedButton
      onClick={ () => setIsDefinedUser(!isDefinedUser) }
      className={s.loginButton}
    >{isDefinedUser ? "Выйти" : "Войти"}</StrokedButton>
  )
};

export default LoginButton;