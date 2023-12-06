const addMessage = 'ADD-MESSAGE';

let initialState = {
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
    ]
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                id: 5,
                message: action.newMessageBody
            };
            return {
                ...state,
                messagesData: [...state.messagesData, newMessage]
            }
        default:
            return state;
    }
};

export const addMessageCreater = (newMessageBody) => ({ type: addMessage, newMessageBody });

export default profileReducer;