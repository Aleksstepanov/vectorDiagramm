import React from 'react';

import cl from 'classnames';

import style from './Header.module.scss';

import MobileMenu from '../MobileMenu/MobileMenu';

export default (props) => {
    const {menu, logo} = props;
    const menuList = menu.map((elem, index) =>
              <li key={index}
                  className={style.menuElem}
              >
                  <button className="grey darken-1">{elem}</button>
              </li>
          )
    return (
        <header>
            <nav className={style.navDesktop}>
                <div className={cl("nav-wrapper", 'grey', 'darken-1')}>
                    <div className={cl('brand-logo', style.logo)}>
                        <img src={logo} alt="logo" className={cl(style.logoImg)}/>
                    </div>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {menuList}
                    </ul>
                </div>
            </nav>
            <nav className={cl(style.navMobile, 'grey', 'darken-1')}>
                <MobileMenu menu={menu}/>
            </nav>
        </header>
    )
}