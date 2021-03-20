import { 
    ADD_CARDS, 
    COMBINE_CARDS, 
    GET_POSTS, 
    REMOVE_CARDS, 
    GET_USERS } from '../Action/ActionType'

const initialState = {
    posts: null,
    users: null,
    combineCards: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case REMOVE_CARDS:
            {
                return {
                    ...state,
                    posts: state.posts.filter(item => item.id !== action.payload)
                }
            }
        case ADD_CARDS:
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        case COMBINE_CARDS:
            return {
                ...state,
                combineCards: state?.posts?.concat(action.payload)
            }
        default:
            return state
    }
}