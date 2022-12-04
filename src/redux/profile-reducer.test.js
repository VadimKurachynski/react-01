import profileReducer, {addPostActionCreator} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";


test('new post', () => {
    let action =addPostActionCreator("ati-baty")
    let state = {
        posts: [
            {id: 1, message: `Hi, I am react developer`, likesCount: 12},
            {id: 2, message: "Hi, how are you?", likesCount: 10},
            {id: 3, message: "it's my first post", likesCount: 21},
        ]

    };
    let newState=profileReducer(state,action);

    expect(newState.posts.length).toBe(4);
});



