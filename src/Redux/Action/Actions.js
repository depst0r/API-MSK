import {
    CREATE_CARDS,
    COMBINE_CARDS,
    GET_POSTS,
    REMOVE_CARDS,
    GET_USERS,
    UPDATE_CARDS
} from './ActionType'


export const fetchPosts = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(posts => posts.json())
            .then(posts => dispatch({ type: GET_POSTS, payload: posts }))
    }
}

export const fetchUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(users => users.json())
            .then(users => dispatch({ type: GET_USERS, payload: users }))
    }
}

export const removeCard = id => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        dispatch({ type: REMOVE_CARDS, payload: id })
    }
}

export const createCards = ({ title, body, select }) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId: select,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(newCard => newCard.json())
            .then(newCard => dispatch({ type: CREATE_CARDS, payload: newCard }))
    }
}

export const updateCards = (id, title, body, userId) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify(title, body, userId),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(update => update.json())
            .then(update => dispatch({ type: UPDATE_CARDS, payload: update }))
    }
}


export const combineCards = arr => ({ type: COMBINE_CARDS, payload: arr })