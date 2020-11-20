import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './Header.module.scss';
import logoSpasibo from '../../assets/images/logoSpasibo.png'

import SiteNavLinks from '../SiteNavLinks/SiteNavLinks';
import UserNav from './UserNav/UserNav';


function Header(props){
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  let activeBurgerStyle = isOpenMobileMenu ? s.closeMenu : "",
      mobileMenuActiveStyle = isOpenMobileMenu ? s.mobileMenuActive : "";
  
  return (
    <header className={s.header}>
      <div className="container">
        <NavLink to="/" className={s.logoSpasibo}>
          <img src={logoSpasibo} alt="Спасибо от Сбербанка"/>
        </NavLink>
        
        <div className={s.wrapperMobileMenu + " " + mobileMenuActiveStyle}>
          <nav className={s.siteNav}>
              <ul className={s.siteNavList}>
                <SiteNavLinks/>
              </ul>
          </nav>

          <nav className={s.userNav}>
            <UserNav/>
          </nav>
        </div>

        <button 
          className={s.burgerMenu + " " + activeBurgerStyle}
          onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}  
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
};

export default Header;