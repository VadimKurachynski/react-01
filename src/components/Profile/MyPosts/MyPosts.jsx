import s from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {
    let postsElements = props.postsData.map(p => <Post message={p.message} like={p.likesCount}/>)
    return (
        <div className={s.postBlock} >
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>

    );
}
export default MyPosts;