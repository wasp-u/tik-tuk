import { connect } from "react-redux";
import { setUserFeedAC } from "../../redux/userFeedPage_reducer";
import UserFeed from "./UserFeed"


let mapStateToProps = (state) => {
    return {
        userFeed: state.userFeedPage.userFeed
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserFeed: (userFeed) => (dispatch(setUserFeedAC(userFeed)))
    }
}

const UserFeedContainer = connect(mapStateToProps, mapDispatchToProps)(UserFeed);

export default UserFeedContainer;