import Post from '../Post/Post';
import style from './UserFeed.module.css'

const UserFeed = (props) => {
    let userFeed;
    let getUserFeed;
    try {
        var axios = require("axios").default;

        var options = {
            method: 'GET',
            url: 'https://tiktok33.p.rapidapi.com/user/feed/dave.xp',
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': '493fd3e844mshffd84ae842a6590p11fbc4jsnb7aa4dd470a5'
            }
        };

        axios.request(options).then(function (response) {
            getUserFeed = response.data;
        }).catch(function (error) {
            console.error(error);
        });
        userFeed = getUserFeed.map(item => <Post userName={item.name}
            userAvatar={item.userAvatar}
            videoUrl={item.videoUrl} l
            ikesCount={item.likeCount}
            commentsCount={item.commentCount}
            text={item.text} />)
    }
    catch {
        userFeed = <div> <img src="https://cdn1.iconfinder.com/data/icons/chat-6/447/speech-bubble-balloon-chat-message-talk-conversation_195-512.png" alt="" /></div>
    }
    return (
        <div className={style.user_feed_grid}>
            {userFeed}
        </div>
    )
}

export default UserFeed;


