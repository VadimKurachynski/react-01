import s from "./MyPosts.module.css";
console.log(s);

const MyPosts = () => {
    return (
        <div>
            My post
            <div>New post</div>
            <div className={`${s.post} ${s.zoloto}`}>post1</div>
            <div className={`${s.post} ${s.zoloto}`}>post2</div>
        </div>

    );
}
export default MyPosts;