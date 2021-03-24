import {
    CREATE_CARDS,
    COMBINE_CARDS,
    GET_POSTS,
    REMOVE_CARDS,
    GET_USERS,
} from './ActionType'

export const fetchPosts = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then((posts) => posts.json())
            .then((posts) => dispatch({ type: GET_POSTS, payload: posts }))
    }
}

export const fetchUsers = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((users) => users.json())
            .then((users) => dispatch({ type: GET_USERS, payload: users }))
    }
}

export const removeCard = (id) => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
        })
        dispatch({ type: REMOVE_CARDS, payload: id })
    }
}

export const fetchComments = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/comments/`)
            .then((res) => res.json())
            .then((res) => dispatch({ type: 'getComments', data: res }))
    }
}

export const createCards = (title, body) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then(newCard => newCard.json())
            .then(newCard => dispatch({ type: CREATE_CARDS, payload: newCard }))
    }
}

export const combineCards = arr => ({ type: COMBINE_CARDS, payload: arr })