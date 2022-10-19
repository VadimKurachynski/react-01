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
           <Post />
           <Post />
           <Post />
           <Post />
        </div>

    );
}
export default MyPosts;