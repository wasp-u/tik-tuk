const SET_FEED = 'SET_FEED';

export const setFeedAC = (feed) => ({ type: SET_FEED, feed });

let initialState = {
    feed: []
}

const feedPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FEED:
            return { ...state, feed: [...action.feed] };
        default: return state;
    }
}

export default feedPage_reducer;