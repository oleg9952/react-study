export const fetchPosts = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: 'FETCH_POSTS',
                payload: data
            })
        })
}

export const changePage = page => {
    return {
        type: 'CHANGE_PAGE',
        payload: page
    }
}

export const goNext = () => {
    return {
        type: 'GO_NEXT'
    }
}

export const goBack = () => {
    return {
        type: 'GO_BACK'
    }
}

export const setPaginatePages = p => {
    return {
        type: 'SET_N_PAGES',
        payload: p
    }
}