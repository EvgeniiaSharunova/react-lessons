import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './DialogsItems.module.css';

const DialogsItems = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={style.item}>
            <Link to={path}>
                <img className={style.avatar} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDJaEoQJ0PLbNOn_xHRIw7mcyuIOj0_hVZlA&usqp=CAU" alt="avatar" />
            </Link>
            <NavLink to={path} className={({ isActive }) => (isActive ? style.active : '')} >
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogsItems;