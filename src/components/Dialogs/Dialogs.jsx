import React from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import style from './Dialogs.module.css';
import DialogsItems from './DialogsItems/DialogsItems';
import Message from './Message/Message';
import { FormControl } from '../common/FormsControls/FormsControls';
import { requiredField, maxLength40 } from '../../utils/validators/validators';


const DialogAddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <Field name={'dialogs'} component={FormControl} typeField={'textarea'} validate={[requiredField, maxLength40]} placeholder='Enter your message' cols="30" rows="5"></Field>
            <div><button>Send</button></div>
        </form>
    );
}

const afterSubmit = (result, dispatch) => dispatch(reset('dialogAddMessageForm'));

const DialogsReduxForm = reduxForm({ form: 'dialogAddMessageForm', onSubmitSuccess: afterSubmit })(DialogAddMessageForm);

const Dialogs = (props) => {

    let dialogsElements = props.state.profilePage.dialogsData.map(element => <DialogsItems name={element.name} id={element.id} key={element.id} />);
    let messagesElements = props.state.profilePage.messagesData.map(message => <Message text={message.message} key={message.id} />);

    const addNewMessageForm = (formData) => {
        props.addMessage(formData.dialogs);
    };

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={style.messages}>
                {messagesElements}
            </div>

            < DialogsReduxForm onSubmit={addNewMessageForm} />
        </div>

    );
}



export default Dialogs;