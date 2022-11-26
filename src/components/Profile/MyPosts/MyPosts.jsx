import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
const MyPosts = (props) => {

    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id} key={p.id}/>)

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
}

const AddPostForm=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={"textarea"} placeholder={"add post"} name={"newPostBody"} type={"input"}/></div>
            <div><button>Add post</button></div>
        </form>
    )
}
const AddPostReduxForm=reduxForm({form:"profileAddPostForm"})(AddPostForm)
export default MyPosts;