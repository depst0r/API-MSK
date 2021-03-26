import { combineCards } from '../Action/Actions'
import {
    CREATE_CARDS,
    COMBINE_CARDS,
    GET_POSTS,
    REMOVE_CARDS,
    GET_USERS,
    UPDATE_CARDS
} from '../Action/ActionType'

const initialState = {
    posts: null,
    users: null,
    combineCards: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload,
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload,
            }
        case REMOVE_CARDS:
            {
                return {
                    ...state,
                    posts: state.posts.filter(item => item.id !== action.payload),
                }
            }
        case CREATE_CARDS:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case COMBINE_CARDS:
            return {
                ...state,
                combineCards: action.payload,
            }
        case UPDATE_CARDS:
            const card = combineCards.find(obj => {
                return obj.id === action.payload.id
            })
            if (card) {
                card.title = action.payload.title
                card.body = action.payload.body
                postMessage.userId = action.payload.userId
            }

            return {
                ...state,
                combineCards: card
            }
        default:
            return state
    }
}