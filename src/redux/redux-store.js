import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from './authReducer';
import friendsListReducer from './friendsListReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let redusers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    friendsList: friendsListReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;