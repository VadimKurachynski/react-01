import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {createRef} from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)

    let newPostElement = createRef();


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action=updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }


    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>

                <div><textarea onChange={onPostChange} ref={newPostElement}
                               value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;