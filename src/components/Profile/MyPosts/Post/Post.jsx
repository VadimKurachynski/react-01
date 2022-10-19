import s from "./Post.module.css";
console.log(s);

const Post = () => {
    return (
        <div>
           
            <div className={`${s.post} ${s.zoloto}`}>post1</div>
          
        </div>

    );
}
export default MyPosts;