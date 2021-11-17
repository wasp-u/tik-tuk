import { connect } from "react-redux"
import { setUserInfoAC } from "../../redux/userInfoPage_reducer"
import UserPage from "./UserPage"

let mapStateToProps = (state) => {
    return {
        userInfo: state.userInfoPage.userInfo
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserInfo: (userInfo) => (dispatch(setUserInfoAC(userInfo)))
    }
}

const UserPageContainer = connect(mapStateToProps, mapDispatchToProps)(UserPage);

export default UserPageContainer;