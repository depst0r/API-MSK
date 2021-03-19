import { COMBINE_CARDS } from '../Action/ActionType'

const initialState = {
    posts: null,
    users: null,
    combineCards: null
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                posts: action.payload
            }
        case 'getUsers':
            return {
                ...state,
                users: action.payload
            }
        case 'removePost':
            {
                return {
                    ...state,
                    users: state.users.filter(item => item.id !== action.payload)
                }
            }
        case 'addCards':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        case COMBINE_CARDS:
            return {
                ...state,
                combineCards: state.posts.concat(action.payload)
            }
        default:
            return state
    }
}