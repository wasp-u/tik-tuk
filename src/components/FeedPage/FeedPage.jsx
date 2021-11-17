import Post from '../Post/Post';
import style from './FeedPage.module.css'

const FeedPage = (props) => {
    let posts = []
    if (props.feed.length === 0) {
        let axios = require("axios").default;
        let options = {
            method: 'GET',
            url: 'https://tiktok33.p.rapidapi.com/trending/feed',
            headers: {
                'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
                'x-rapidapi-key': '493fd3e844mshffd84ae842a6590p11fbc4jsnb7aa4dd470a5'
            }
        };

        axios.request(options).then(function (response) {
            props.setFeed(response.data);
        }).catch(function (error) {
            console.error(error);
        });
        posts = [<img src="https://cdn.dribbble.com/users/902865/screenshots/4814970/loading-opaque.gif" alt="" />]
    } else {
        posts = props.feed.map(f => <Post
            userName={f.authorMeta.nickName}
            userAvatar={f.authorMeta.avatar}
            videoUrl={f.videoUrl}
            likesCount={f.diggCount}
            commentsCount={f.commentCount}
            text={f.text} />)
    }
    return (
        <div className={style.feed_page_wrapper}>
            {posts}
        </div>
    )



}

export default FeedPage;