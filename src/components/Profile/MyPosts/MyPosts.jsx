import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
const MyPosts = (props) => {

    let postsElements =
        props.profilePage.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id} key={p.id}/>)

    // let onAddPost = () => {
    //     props.addPost();
    // }
    //
    // let onPostChange = (e) => {
    //     let text=e.target.value;
    //     props.onPostChange(text);
    // }
     let addNewPost = (values) => {
         // props.addPost();
        props.addPost(values.newPostBody);

     }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                {/*<div><textarea onChange={onPostChange}value={props.profilePage.newPostText}/></div>*/}
                {/*<div>*/}
                {/*    <button onClick={onAddPost}>Add post</button>*/}
                {/*</div>*/}

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