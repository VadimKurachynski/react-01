import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements =
        props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text=e.target.value;
        props.onPostChange(text);
    }
    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange}value={props.newPostText}/></div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;