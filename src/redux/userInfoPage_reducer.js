const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfoAC = (userInfo) => ({ type: SET_USER_INFO, userInfo });

let initialState = {
    userInfo: [{
        "user": {
            "id": "241418783272443904",
            "shortId": "0",
            "uniqueId": "dave.xp",
            "nickname": "Dave XP",
            "avatarLarger": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_1080x1080.jpeg?x-expires=1637179200&x-signature=J5kGqZXWj4sTkUuUSIDKOqmX58I%3D",
            "avatarMedium": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_720x720.jpeg?x-expires=1637179200&x-signature=EfnT6RnHwFP6s0G%2BmHTYFK0sxHU%3D",
            "avatarThumb": "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/8dedfc004fb5d07eb5bda02770d198cd~c5_100x100.jpeg?x-expires=1637179200&x-signature=GbNLR8zEWuv6bJ%2Fl9CodjuOneGU%3D",
            "signature": "🇨🇷 Animator from Costa Rica, Get my app Dollify! 👇",
            "createTime": 1497901438,
            "verified": true,
            "secUid": "MS4wLjABAAAA6gH8A7SYTosSkFr2vIQxOLrWtaoH5SnnPNy4LV2Bn3DtoT1ocb1bWLLWphTBIKGD",
            "ftc": false,
            "relation": 0,
            "openFavorite": false,
            "bioLink": {
                "link": "dollifyapp.com",
                "risk": 3,
            },
            "commentSetting": 0,
            "duetSetting": 0,
            "stitchSetting": 0,
            "privateAccount": false,
            "secret": false,
            "isADVirtual": false,
            "roomId": "",
        },
        "stats": {
            "followerCount": 4800000,
            "followingCount": 67,
            "heart": 76300000,
            "heartCount": 76300000,
            "videoCount": 38,
            "diggCount": 0,
        },
    }]
}

const userInfoPage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return { ...state, userInfo: [...state.userInfo, ...action.userInfo] };
        default: return state;
    }
}
export default userInfoPage_reducer;