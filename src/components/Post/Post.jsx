import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post_container}>
            <div className={style.post}>
                <div className={style.postHeader}>
                    <div>
                        <img src={props.userAvatar} alt="" />
                    </div>
                    <div>{props.userName}</div>
                </div>
                <div className={style.postBody}>
                    <div className={style.black_bg_video}>
                        <div className={style.postVideo}>
                            <video id='1' width='100%' src={props.videoUrl} muted autoplay controls></video>
                        </div>
                    </div>
                    <div className={style.postCountInfo}>
                        <div className={style.likes} >
                            <div className={style.iconContainer}>
                                <img className={style.icon} src="https://icones.pro/wp-content/uploads/2021/04/icone-noire-noir.png" alt="" />
                            </div>
                            <div>{props.likesCount}</div>
                        </div>
                        <div className={style.comments}>
                            <div className={style.iconContainer}>
                                <img className={style.icon} src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png" alt="" />
                            </div>
                            <div>{props.commentsCount}</div>
                        </div>
                    </div>
                    <div className={style.postText}>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Post;