import React, { useState } from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Descr.module.css';
import ProfileDataReduxForm from './ProfileDataForm';
import ProfileStatusContainerWithHooks from './ProfileStatus/ProfileStatusContainerWithHooks';

const Descr = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile.profile) {
        return <Preloader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => { setEditMode(false) });

    }
    return (
        <div className={style.descr} >
            <img className={style.ava} src={props.profile.profile.photos.large || 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='} alt='person' />
            {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

            < div className={style.info}>
                {editMode ? <ProfileDataReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit} /> : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => { setEditMode(true) }} />}
            </div >
        </div >
    )

}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div className={style.person_name}>{profile.profile.fullName}</div>
            <ProfileStatusContainerWithHooks status={profile.status} updateUserStatus={profile.updateUserStatus} />
            <div className={style.person_descr}>
                <div>{`About me: ${profile.profile.aboutMe || ''}`}</div>
                <div className={style.social}><span> Contacts: </span>
                    {Object.keys(profile.profile.contacts).map(key => <Contacts contactTitle={key} contactValue={profile.profile.contacts[key]} key={key} />)}
                </div>
                <div>Looking for a job: {profile.profile.lookingForAJob ? 'yes' : 'no'}</div>
                {profile.profile.lookingForAJob &&
                    <div> <span>My professional skills: </span>{profile.profile.lookingForAJobDescription}</div>
                }
            </div>
        </div>
    );
}



export const Contacts = ({ contactTitle, contactValue }) => {
    return <div className={style.contacts}><span>{contactTitle}</span>: {contactValue || '-'} </div>
}

export default Descr;