import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import style from './Descr.module.css';
import ProfileStatusContainer from './ProfileStatus/ProfileStatusContainer';
import ProfileStatusContainerWithHooks from './ProfileStatus/ProfileStatusContainerWithHooks';

const Descr = (props) => {
    if (!props.profile.profile) {
        return <Preloader />
    } else {
        return (
            <div className={style.descr}>
                <img className={style.ava} src={!props.profile.profile.photos.large ? 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=' : props.profile.profile.photos.large} alt='person' />
                <div className={style.info}>
                    <div>
                        <div className={style.person_name}>{props.profile.profile.fullName}</div>
                        <ProfileStatusContainerWithHooks status={props.status} updateUserStatus={props.updateUserStatus} />
                        <div className={style.person_descr}>
                            <div>{`Обо мне: ${props.profile.profile.aboutMe}`}</div>
                            <div className={style.social}>
                                <div><span> Facebook: </span>{!props.profile.profile.contacts.facebook ? '-' : props.profile.profile.contacts.facebook}</div>
                                <div><span>GitHub: </span>{!props.profile.profile.contacts.github ? '-' : props.profile.profile.contacts.github}</div>
                                <div><span>Instagram: </span> {!props.profile.profile.contacts.instagram ? '-' : props.profile.profile.contacts.instagram}</div>
                                <div><span>MainLink: </span>{!props.profile.profile.contacts.mainLink ? '-' : props.profile.profile.contacts.mainLink}</div>
                                <div><span>Twitter: </span>{!props.profile.profile.contacts.twitter ? '-' : props.profile.profile.contacts.twitter}</div>
                                <div><span>VK: </span>{!props.profile.profile.contacts.vk ? '-' : props.profile.profile.contacts.vk}</div>
                                <div><span>WebSite: </span>{!props.profile.profile.contacts.website ? '-' : props.profile.profile.contacts.website}</div>
                                <div><span>YouTube: </span>{!props.profile.profile.contacts.youtube ? '-' : props.profile.profile.contacts.youtube}</div>
                            </div>
                            <div>Ищу ли я работу: {props.profile.profile.lookingForAJob ? 'да' : 'нет'}</div>
                            <div>{props.profile.profile.lookingForAJobDescription}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Descr;