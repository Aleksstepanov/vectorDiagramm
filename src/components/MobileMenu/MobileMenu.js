import React from 'react';
import * as M from '../../../node_modules/materialize-css/dist/js/materialize.min';
import cl from 'classnames';
import style from './MobileMenu.scss';

export default (props) => {
    const {menu} = props;
    const onMenuClick = () => {
        const elems = document.querySelector('.sidenav');
        M.Sidenav.init(elems);
        const instance = M.Sidenav.getInstance(elems);
        instance.open();
    }
    return (
        <React.Fragment>
            <ul id="slide-out" className={cl('sidenav', 'grey', 'darken-1')}>
                {menu.map((elem, index) =>
                <li key={index} className={style.menuElem}>
                    <button className="grey darken-1">{elem}</button>
                    <hr/>
                </li>
                )}
            </ul>
            <button data-target="slide-out" className="sidenav-trigger grey darken-1"
                onClick={onMenuClick}
                ><i className="material-icons">menu</i></button>
        </React.Fragment>
    )
}