import s from "./MyPosts.module.css";
import Post from "./Post/Post";
console.log(s);

const MyPosts = () => {

    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hi, how are you?" like="5" />
            <Post message="it's my first post" like="6" />
            <Post message="it's my first post" like="6" />
            <Post message="it's my first post" like="6" />
        </div>

    );
}
export default MyPosts;