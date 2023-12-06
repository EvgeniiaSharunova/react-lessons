import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import style from './Friend.module.css';

const Friend = (props) => {

    let friendsElements = props.state.friendsList.friendsData.map(person => {
        return (
            <div key={person.id}>
                <Link to={'/friends/' + person.id}><img className={style.avatar} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar" /></Link>
                <NavLink to={'/friends/' + person.id} id={person.id} className={({ isActive }) => (isActive ? style.activeLink : '')}>{person.name}</NavLink>
            </div>
        )
    });

    return (
        <div>
            <div className={style.list}>
                {friendsElements}
            </div>
        </div>
    );
}

export default Friend;