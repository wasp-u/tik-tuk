import UserFeedContainer from './UserFeedContainer';
import UserInfo from './UserInfo';
import style from './UserPage.module.css'

const UserPage = (props) => {
    let element = [];
    if (props.userInfo.length === 0) {
        var axios = require("axios").default;
        var options = {
            method: 'GET',
            url: 'https://tiktok33.p.rapidapi.com/user/info/dave.xp',
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': '493fd3e844mshffd84ae842a6590p11fbc4jsnb7aa4dd470a5'
            }
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            props.setUserInfo([response.data])
        }).catch(function (error) {
            console.error(error);
        });
        element = [<img src="https://cdn.dribbble.com/users/902865/screenshots/4814970/loading-opaque.gif" alt="" />]
    } else {
        element = [<UserInfo userAvatar={props.userInfo[0].user.avatarThumb}
            userName={props.userInfo[0].user.nickname}
            followersCount={props.userInfo[0].stats.followerCount}
            followingCount={props.userInfo[0].stats.followingCount}
            heartCount={props.userInfo[0].stats.heartCount}
            videoCount={props.userInfo[0].stats.videoCount}
        />]
    }
    return (
        <div className={style.user_info_container}>
            {element}
            <UserFeedContainer />
        </div>
    )
}

export default UserPage;