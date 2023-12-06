import messageReducer from './messageReducer';
import profileReducer from './profileReducer';
import friendsListReducer from './friendsListReducer';

let store = {
    _state: {
        profilePage: {
            dialogsData: [
                { id: 1, name: 'Dmitry' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Dmitry' }
            ],
            messagesData: [
                { id: 1, message: 'I am a normal popover and I can have text and everything' },
                { id: 2, message: 'I am a normal pBLablabl I can have text and everything' },
                { id: 3, message: 'I am a normal popover and I can have text and everything' },
                { id: 4, message: 'Hi' }
            ],
            newMessageText: ''
        },
        messagePage: {
            postData: [
                { id: 1, message: 'Hey, why nobody love me?', likesCount: 15 },
                { id: 2, message: "It's our new program! Hey!", likesCount: 17 }
            ],
            newPostText: ''
        },
        friendsList: {
            friendsData: [
                { id: 1, name: 'Andrew' },
                { id: 2, name: 'Sasha' },
                { id: 3, name: 'Sveta' }
            ]
        }
    },
    _callSubscribe() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        this._state.messagePage = messageReducer(this._state.messagePage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.friendsList = friendsListReducer(this._state.friendsList, action);

        this._callSubscribe(this._state);
    }
}

window.store = store;
export default store;

//store - ООР