import React from 'react';
import { NavLink } from 'react-router-dom';
import Friend from './Friend/Friend';
import FriendContainer from './Friend/FriendContainer';
import style from './Navbar.module.css';

const Navbar = (props) => {

    return (
        <nav className={style.navbar}>
            <div className={style.item}>
                <NavLink to='/profile' className={({ isActive }) => (isActive ? style.activeLink : '')} >Profile</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/dialogs' className={({ isActive }) => (isActive ? style.activeLink : '')} >Messages</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/news' className={({ isActive }) => (isActive ? style.activeLink : '')} >News</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/music' className={({ isActive }) => (isActive ? style.activeLink : '')} >Music</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/users' className={({ isActive }) => (isActive ? style.activeLink : '')} >Find users</NavLink>
            </div>

            <div className={style.item}>
                <NavLink to='/settings' className={({ isActive }) => (isActive ? style.activeLink : '')} >Settings</NavLink>
            </div>

            <div className={style.item}>
                <div className={style.friends}>
                    <NavLink to='/friends' className={({ isActive }) => (isActive ? style.activeLink : '')} >Friends</NavLink>
                </div>

                <FriendContainer />

            </div>

        </nav>
    );
}

export default Navbar;