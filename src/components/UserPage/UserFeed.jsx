import Post from '../Post/Post';
import style from './UserFeed.module.css'

const UserFeed = (props) => {

    if (props.userFeed.length === 0) {
        let data = require('./../../user-feed.json')
        let userFeed = data.itemList
        props.setUserFeed(userFeed)
    }

    let userFeedElement = props.userFeed.map(item => <Post userName={item.author.nickname}
        userAvatar={item.author.avatarMedium}
        videoUrl={item.video.downloadAddr} l
        likesCount={item.stats.diggCount}
        commentsCount={item.stats.commentCount}
        text={item.textExtra.hashtagName} />)
    return (
        <div className={style.user_feed_grid}>
            {userFeedElement}
        </div>
    )
}

export default UserFeed;


