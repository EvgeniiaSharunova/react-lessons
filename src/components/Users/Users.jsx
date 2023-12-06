import React from 'react';
import style from './Users.module.css';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({ totalItemsCount, pageSize, currentPage, onPageChanged, users, ...props }) => {
    return (
        <div>
            <div>Find users</div>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize} currentPage={currentPage} onPageChanged={onPageChanged} />
            {
                users.map(u => <div className={style.userInfo} key={u.id}>
                    <User unfollow={props.unfollow} follow={props.follow} followingInProgress={props.followingInProgress} user={u} />
                </div>)
            }
        </div >
    );
}

export default Users;