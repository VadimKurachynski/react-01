import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {createRef} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => {
       props.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
         props.dispatch(updateNewPostTextActionCreator(text));
        //props.updateNewPostText(text);
    }
    return ( <MyPosts updateNewPostText={onPostChange} addPost={addPost}/> );


}
export default MyPostsContainer;