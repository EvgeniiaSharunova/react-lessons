import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Users.module.css';
import userPhoto from '../../assets/img/user.jpeg';

const User = ({ user, unfollow, follow, followingInProgress }) => {
    return (
        <>
            <div className={style.nameUser}>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img src={user.photos.small !== null ? user.photos.small : userPhoto} alt='avatar' className={style.avatar} />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id); }
                    }>Unfollow</button> : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id); }}>Follow</button>}
                </div>
            </div>
            <div className={style.descrUser}>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </div>
        </>
    )
};

export default User;