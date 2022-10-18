import s from "./Profile.module.css";
console.log(s);

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOILfvBu6_5wt4RB_1Mz5l4Uenm8yXvW0qiA&usqp=CAU" />
      </div>
      <div>
        ava+description
      </div>
      <div>
        My post
        <div>New post</div>
      </div>
      <div className={   `${s.post} ${s.zoloto}`   }>post1</div>
      <div className={s.post}>post2</div>


    </div>

  );
}
export default Profile;