import { stopSubmit } from "redux-form";
import { userAPI, profileAPI } from "../api/api.js";
//import userAPI from "../api/api.js";
//import profileAPI from "../api/api.js";

const addPost = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
/* const updateNewPostText = 'UPDATE-NEW-POST-TEXT'; */
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


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
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state, profile: { ...state.profile, photos: action.photos }
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
    try {
        let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        alert('Error');
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

const getErrorsFromMessages = (messages) => {
    let errors = Object.keys(messages).reduce((acc, key) => {
        let errorMessage = messages[key].split("->");
        errorMessage = errorMessage[1]
            .slice(0, errorMessage[1].length - 1)
            .toLowerCase();
        return { ...acc, [errorMessage]: messages[key] };
    }, {});

    return errors;
};

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(userProfile(userId));
    } else {
        dispatch(stopSubmit('edit-profile', { contacts: getErrorsFromMessages(response.data.messages) }));
        return Promise.reject(response.data.messages);
    }
};

export const addPostCreater = (newPostText) => ({ type: addPost, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export default messageReducer;