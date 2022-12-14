import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required1} from "../../../utils/validators/validators";
import {Textarea} from "../../FormControls/formsControls";
import React from "react";
const maxLength10 = maxLengthCreator(10);
const MyPosts = React.memo(props => {


    let postsElements =
        props.profilePage.posts.map(p => <Post  message={p.message} like={p.likesCount} id={p.id} key={p.id}/>)
    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostReduxForm onSubmit={addNewPost}/>
            </div>
            {postsElements}
        </div>
    );
});

let AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={Textarea} placeholder={"add post"} name={"newPostBody"} type={"input"}
                        validate={[required1, maxLength10]}/></div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}
const AddPostReduxForm = reduxForm({form: "profileAddPostForm"})(AddPostForm)
export default MyPosts;