import React from 'react';
import Bg from './Bg/Bg';
import Descr from './Descr/Descr';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
    return (
        <div>
            <Bg />
            <Descr savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props}
                status={props.status}
                updateUserStatus={props.updateUserStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;