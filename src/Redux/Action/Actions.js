export const fetchPosts = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(posts => posts.json())
            .then(posts => dispatch({ type: 'getPosts', payload: posts }))
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
        dispatch({ type: 'removePost', payload: id })
    }
}

export const addCards = card => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: card
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }).then(res => res.json())
            .then(res => dispatch({ type: 'addCards', payload: res }))
    }
}