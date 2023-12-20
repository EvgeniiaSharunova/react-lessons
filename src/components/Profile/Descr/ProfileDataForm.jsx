import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { requiredField } from '../../../utils/validators/validators';
import { createField, FormControl } from '../../common/FormsControls/FormsControls';
import style from './Descr.module.css';
import styles from '../../common/FormsControls/FormsControls.module.css';

const ProfileDataForm = ({ profile, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>save</button>
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div className={style.person_name}>{createField('Full name', 'fullName', FormControl, 'input', [requiredField], null)}</div>
            <div className={style.person_descr}>
                <div>About me: {createField('About me', 'aboutMe', FormControl, 'textarea', null)}</div>
                <div className={style.social}><span> Contacts: </span>
                    {Object.keys(profile.profile.contacts).map(key => {
                        return <div key={key}>
                            <p>{key}: {createField(key, 'contacts.' + key, FormControl, 'input', null)}</p>
                        </div>
                    }
                    )}
                </div>
                <div>Looking for a job: {createField(null, 'lookingForAJob', FormControl, 'input', null, null, { type: 'checkbox' })}</div>
                <div> <span>My professional skills: </span>{createField('My professional skills', 'lookingForAJobDescription', FormControl, 'textarea', null)}</div>
            </div>
        </form>
    );
}

const ProfileDataReduxForm = reduxForm({ form: 'edit-profile', enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm);

function mapStateToProps(state) {
    return { initialValues: state.messagePage.profile }
}

export default connect(mapStateToProps, null)(ProfileDataReduxForm);