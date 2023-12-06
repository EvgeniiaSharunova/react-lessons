import React from 'react';
import { Link } from 'react-router-dom';
import style from './Message.module.css';

const Message = (props) => {
    return (
        <div className={style.message}>
            <Link to="#">
                <img className={style.avatar} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar" />
            </Link>
            <div className={style.descr}>{props.text}</div>
        </div>
    );
}

export default Message;