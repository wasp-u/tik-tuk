import style from './UserInfo.module.css'

const UserInfo = (props) => {
    return (
        <div className={style.user_info}>
            <div className={style.user_bio}>
                <img className={style.user_avatar} src={props.userAvatar} alt="" />
                <div className={style.user_name}>
                    <p>{props.userName}</p>
                </div>
            </div>
            <div className={style.user_stats}>
                <div className={style.followers}>
                    <p>{props.followersCount} Followers</p>
                </div>
                <div className={style.following}>
                    <p>{props.followingCount} Following</p>
                </div>
                <div className={style.heart}>
                    <p>{props.heartCount} Likes</p>
                </div>
                <div className={style.video_count}>
                    <p>{props.videoCount} Videos</p>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;