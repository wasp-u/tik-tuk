const SET_USER_FEED = 'SET_USER_FEED';

export const setUserFeedAC = (userFeed) => ({ type: SET_USER_FEED, userFeed });

let initialState = {
    userFeed: []
}

const userFeedPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_FEED:
            return { ...state, userFeed: [...action.userFeed] };
        default: return state;
    }
}

export default userFeedPage_reducer;