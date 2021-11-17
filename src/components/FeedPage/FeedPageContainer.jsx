import { connect } from "react-redux"
import { setFeedAC } from "../../redux/feedPage_reducer"
import FeedPage from "./FeedPage"

let mapStateToProps = (state) => {
    return {
        feed: state.feedPage.feed
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setFeed: (feed) => { dispatch(setFeedAC(feed)) }
    }
}

const FeedPageContainer = connect(mapStateToProps, mapDispatchToProps)(FeedPage);

export default FeedPageContainer;