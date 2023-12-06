import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={style.item}>
                <a href="#s">
                    <img className={style.avatar} src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="avatar" />
                </a>
                <div> {props.message} </div>
            </div>
            <div><span>like</span> {props.likesCount} </div>
        </div>
    );
}

export default Post;