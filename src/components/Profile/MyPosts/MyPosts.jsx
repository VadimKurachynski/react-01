import s from "./MyPosts.module.css";
import Post from "./Post/Post";
console.log(s);

const MyPosts = () => {

    return (
        <div className={s.postBlock}>
           <h3>My posts</h3>
            <div>
               <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <Post message="Hi, how are you?" like="5" />
            <Post message="it's my first post" like="6" />
            <Post message="it's my first post" like="6" />
            <Post message="it's my first post" like="6" />
        </div>

    );
}
export default MyPosts;