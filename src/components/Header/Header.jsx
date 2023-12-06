import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';


const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='./Raster.png' alt='logo' />
            <div className={style.loginBlock}>
                {props.isAuth ?
                    <div> {props.login}
                        <button onClick={props.logout}>logout</button>
                    </div> :
                    <NavLink to={'/login'}>LOGIN</NavLink>}

            </div>
        </header>
    );
}

export default Header;