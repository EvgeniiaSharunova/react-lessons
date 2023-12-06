//import messageReducer, { addPostCreater } from "./messageReducer.js";
import messageReducer from "./messageReducer.js";
import addPostCreater from "./messageReducer.js";
import deletePost from "./messageReducer.js";

let state = {
    postData: [
        { id: 1, message: 'Hey, why nobody love me?', likesCount: 15 },
        { id: 2, message: "It's our new program! Hey!", likesCount: 17 }
    ]
}

it('new post should be added', () => {
    let action = addPostCreater('Hello');
    let newState = messageReducer(state, action);
    expect(newState.postData.length).toBe(3);
});

it('message of new post should be correct', () => {
    let action = addPostCreater('Hello');
    let newState = messageReducer(state, action);
    expect(newState.postData[4].message).toBe('Hello');
    expect(newState.postData[4].likesCount).toBe(0);
});

it('after deleting length of message should be decrement', () => {
    let action = deletePost(1);
    let newState = messageReducer(state, action);
    expect(newState.postData.length).toBe(1);
});

it(`after deleting length of message should't be decrement if id is incorrect`, () => {
    let action = deletePost(1000);
    let newState = messageReducer(state, action);
    expect(newState.postData.length).toBe(2);
});