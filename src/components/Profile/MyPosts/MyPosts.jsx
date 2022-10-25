import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {createRef} from "react";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount} id={p.id}/>)
    // let addPost=()=>{console.log("нажата кнопка")};
    let newPostElement=createRef();

    let addPost=()=>{

        let text=newPostElement.current.value;
        props.addPost(text);
         newPostElement.current.value="";

    }

    return (
        <div  className={s.postBlock} >
            <h3>My posts</h3>
            <div>
                {/*<div><textarea ref={newPostElement}></textarea></div>*/}
                <div><textarea ref={newPostElement} onChange={addPost} /></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    );
}
export default MyPosts;