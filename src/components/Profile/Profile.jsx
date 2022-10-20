import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

console.log(s);

const Profile = () => {
    return (
        <div >
            <div className={s.cont_img}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOILfvBu6_5wt4RB_1Mz5l4Uenm8yXvW0qiA&usqp=CAU"/>
            </div>
            <div>
                ava+description
            </div>

            <MyPosts/>

        </div>

    );
}
export default Profile;