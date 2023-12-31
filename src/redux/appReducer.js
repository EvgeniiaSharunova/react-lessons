import { initUser } from "./authReducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

export const inisializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(initUser());
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess());
        })

    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });

export default appReducer;
