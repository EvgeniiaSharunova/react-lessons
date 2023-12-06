import axios from 'axios';
import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/img/user.jpeg';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    }
    /*  props.setUsers
         ([
             { id: 1, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: false, fullName: 'Dmitry K.', status: 'I am looking for a Job right now...', location: { city: 'Minsk', country: 'Belarus,' } },
             { id: 2, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: false, fullName: 'Svetlana D.', status: 'I am so pretty', location: { city: 'Minsk', country: 'Belarus,' } },
             { id: 3, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: true, fullName: 'Sergei S.', status: 'I like football!!!', location: { city: 'Kiev', country: 'Ukrane,' } },
             { id: 4, photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn-qGqAcyvbYa_wDNekjmrfHIO7Lpp7rstIA&usqp=CAU', followed: true, fullName: 'Andrew T.', status: 'I am free to help you  to create good Video Production', location: { city: 'Philadelphia', country: 'United States,' } }
         ]) */
    return (
        <div>
            <div>Find users</div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u => <div className={style.userInfo} key={u.id}>
                    <div className={style.nameUser}>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt='avatar' className={style.avatar} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
                        </div>
                    </div>
                    <div className={style.descrUser}>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;