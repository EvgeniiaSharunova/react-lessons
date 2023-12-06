import { userAPI, profileAPI } from "../api/api.js";
//import userAPI from "../api/api.js";
//import profileAPI from "../api/api.js";

const addPost = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
/* const updateNewPostText = 'UPDATE-NEW-POST-TEXT'; */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postData: [
        { id: 1, message: 'Hey, why nobody love me?', likesCount: 15 },
        { id: 2, message: "It's our new program! Hey!", likesCount: 17 }
    ],
    profile: null,
    status: ''
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            let newPost = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        /* case updateNewPostText:
            return {
                ...state,
                newPostText: action.newText
            } */
        case DELETE_POST:
            return {
                ...state, profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state, postData: state.postData.filter(p => p.id !== action.postId)
            }
        default:
            return state;
    }
};

export const userProfile = (userId) => async (dispatch) => {
    let data = await userAPI.getProgile(userId);
    dispatch(setUserProfile(data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const addPostCreater = (newPostText) => ({ type: addPost, newPostText });
/* export const updateNewPostTextCreater = (text) => ({ type: updateNewPostText, newText: text }); */
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });


export default messageReducer;