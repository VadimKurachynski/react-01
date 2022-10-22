import s from "./MyPosts.module.css";
import Post from "./Post/Post";
console.log(s);


let postsData=[
    {id: 1, message: `Hi, I am react developer`,likesCount: 12},
    {id: 2, message: "Hi, how are you?",likesCount: 10},
    {id: 3, message: "it's my first post",likesCount: 20},
]



const MyPosts = () => {

    return (
        <div className={s.postBlock}>
           <h3>My posts</h3>
            <div>
               <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <Post message={postsData[0].message} like={postsData[0].likesCount}/>
            <Post message={postsData[1].message} like={postsData[1].likesCount}/>
            <Post message={postsData[2].message} like={postsData[2].likesCount}/>

        </div>

    );
}
export default MyPosts;