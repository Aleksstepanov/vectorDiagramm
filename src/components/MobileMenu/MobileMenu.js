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
                    <a>{elem}</a>
                    <hr/>
                </li>
                )}
            </ul>
            <a href="#" data-target="slide-out" className="sidenav-trigger"
                onClick={onMenuClick}
                ><i className="material-icons">menu</i></a>
        </React.Fragment>
    )
}