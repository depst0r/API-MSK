const initialState = {
    posts: null,
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getPosts':
            return {
                ...state,
                posts: action.data
            }
        default:
            return state
    }
}