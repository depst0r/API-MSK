export const fetchPosts = () => {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/posts/`)
            .then(posts => posts.json())
            .then(posts => dispatch({ type: 'getPosts', data: posts }))
    }
}