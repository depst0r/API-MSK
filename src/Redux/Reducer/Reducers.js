const initialState = {
    posts: null,
    users: null,
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
        default:
            return state
    }
}