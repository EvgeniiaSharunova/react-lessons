import React from 'react';
import { reset, Field, reduxForm } from 'redux-form';
import style from './MyPosts.module.css'
import Post from './Post/Post';
import { requiredField, maxLength15 } from '../../../utils/validators/validators.js';
import { FormControl } from '../../common/FormsControls/FormsControls';


const MyPosts = React.memo(props => {

    /*  shouldComponentUpdate(nextProps, nextState) {
         return nextProps !== this.props || nextState !== this.state;
     } *///для классовой компоненты
    let postsElements = [...props.postData.postData].reverse().map(message => <Post message={message.message} likesCount={message.likesCount} key={message.id} />);
    /* let newPostElement = React.createRef(); */
    /* let addPost = () => {
        props.addPost();
    }; */

    /* let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }; */

    const onSubmit = (formData) => {
        props.addPost(formData.myPosts);
    }

    return (
        <div>
            <div className={style.descr}>My posts</div>
            <MyPostsReduxForm onSubmit={onSubmit} />
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
});

let MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'myPosts'} typeField={'textarea'} component={FormControl} validate={[requiredField, maxLength15]} placeholder={'Post message '} /></div>
            <div><button>Send</button></div>
        </form>
    )
}

const afterSubmit = (result, dispatch) => dispatch(reset('myPosts'));

const MyPostsReduxForm = reduxForm({ form: 'myPosts', onSubmitSuccess: afterSubmit })(MyPostsForm);


export default MyPosts;
