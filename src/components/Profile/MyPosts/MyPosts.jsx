import s from "./MyPosts.module.css";
import Post from "./Post/Post";

console.log(s);


let postsData = [
    {id: 1, message: `Hi, I am react developer`, likesCount: 12},
    {id: 2, message: "Hi, how are you?", likesCount: 10},
    {id: 3, message: "it's my first post", likesCount: 21},
]

let postsElements = postsData.map(p => <Post message={p.message} like={p.likesCount}/>)


const MyPosts = () => {

    return (
        <div className={s.postBlock}>
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