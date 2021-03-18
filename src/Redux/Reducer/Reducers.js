const initialState = {
    posts: null,
    users: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                posts: action.data
            }
        case 'getUsers':
            return {
                ...state,
                users: action.data
            }
        default:
            return state
    }
}