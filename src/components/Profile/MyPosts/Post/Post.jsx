import s from "./Post.module.css";



const Post = (props) => {

    return (

        <div className={s.item} >
            <img src="https://pbs.twimg.com/media/FckWa2RXoAAeDT1?format=jpg&name=large"></img>
            <div  className={`${s.post} ${s.zoloto}`}>{props.message}</div>
            <div>like {props.like}</div>
        </div>


    );
}
export default Post;