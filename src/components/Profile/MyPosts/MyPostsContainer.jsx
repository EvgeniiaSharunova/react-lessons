import { connect } from 'react-redux';
import { addPostCreater } from '../../../redux/messageReducer';
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
    return {
        postData: state.messagePage
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostCreater(newPostText));
        }/* ,
        onPostChange: (text) => {
            dispatch(updateNewPostTextCreater(text));
        } */
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;