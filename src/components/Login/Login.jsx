import React from 'react';
import { reduxForm } from 'redux-form';
import { Navigate } from "react-router-dom";
import styles from '../common/FormsControls/FormsControls.module.css';
import { requiredField } from '../../utils/validators/validators';
import { createField, FormControl } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { logout, login } from '../../redux/authReducer';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', FormControl, 'input', [requiredField], null)}
            {createField('Password', 'password', FormControl, 'input', [requiredField], null, { type: 'password' })}
            {createField(null, 'rememberMe', FormControl, 'input', null, 'remember me', { type: 'checkbox' })}
            {/* <div>
                <Field placeholder={'Password'} name={'Password'} component={FormControl} typeField={'input'} type={'password'} validate={[requiredField]} />
            </div
            > */}
            {error && <div className={styles.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
}

const LoginReduxForm = reduxForm({ form: 'Login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Navigate replace to={'/profile'} />;
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});
export default connect(mapStateToProps, { login, logout })(Login);