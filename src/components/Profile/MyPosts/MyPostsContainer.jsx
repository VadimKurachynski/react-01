import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
// let state=props.store.getState();
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));
//     }
//     return (<MyPosts updateNewPostText={onPostChange}
//                      addPost={addPost}
//                      posts={state.profilePage.posts}
//                      newPostText={state.profilePage.newPostText}
//     />);
// }
// export default MyPostsContainer;



let mapStateToProps = (state) => {
    return {
        profilePage:state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
    }
}
const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);
export default  PostsContainer;