import React from 'react';

import cl from 'classnames';

import style from './Header.module.scss';

import MobileMenu from '../MobileMenu/MobileMenu';

export default (props) => {
    const {menu} = props;
    const menuList = menu.map((elem, index) =>
              <li key={index}
                  className={style.menuElem}
              >
                  <a>{elem}</a>
              </li>
          )
    return (
        <header>
            <nav className={style.navDesktop}>
                <div className={cl("nav-wrapper", 'grey', 'darken-1')}>
                    <a href="#" className={cl('brand-logo', style.logo)}>Logo</a>
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