import s from "./Post.module.css";
console.log(s);

const Post = () => {
    return (

        <div className={s.item}>
            <img src="https://pbs.twimg.com/media/FckWa2RXoAAeDT1?format=jpg&name=large"></img>
            <div className={`${s.post} ${s.zoloto}`}>post1</div>
        </div>


    );
}
export default Post;