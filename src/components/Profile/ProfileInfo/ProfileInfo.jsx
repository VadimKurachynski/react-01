import s from "./ProfileInfo.module.css";

console.log(s);

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.cont_img}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOILfvBu6_5wt4RB_1Mz5l4Uenm8yXvW0qiA&usqp=CAU"/>
            </div>

            <div class={s.descriptionBlock}>
                ava+description
            </div>

        </div>

    );
}
export default ProfileInfo;