import s from "./MyPosts.module.css";
import Post from "./Post/Post";
console.log(s);

const MyPosts = () => {
    return (
        <div>
            My post
            <div>New post</div>
           <Post />
           <Post />
        </div>

    );
}
export default MyPosts;