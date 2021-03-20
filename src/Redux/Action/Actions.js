import { ADD_CARDS, COMBINE_CARDS, GET_POSTS, REMOVE_CARDS } from './ActionType'

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
            .then(users => dispatch({ type: 'getUsers', payload: users }))
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

export const addCards = (title, body, userId) => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title,
                    body,
                    userId
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(newCard => newCard.json())
            .then(newCard => dispatch({ type: ADD_CARDS, payload: newCard }))
    }
}

export const combineCards = arr => ({ type: COMBINE_CARDS, payload: arr })