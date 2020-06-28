const initialState = {
    posts: [],
    currentPage: 1,
    postsPerPage: 10,
    pageNumbers: 0
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_POSTS':
            return {
                ...state,
                posts: action.payload
            }
        case 'CHANGE_PAGE':
            return {
                ...state,
                currentPage: action.payload
            }
        case 'GO_NEXT':
            return {
                ...state,
                currentPage: state.currentPage !== state.pageNumbers ? state.currentPage + 1 : state.currentPage
            }
        case 'GO_BACK':
            return {
                ...state,
                currentPage: state.currentPage !== 1 ? state.currentPage - 1 : 1
            }
        case 'SET_N_PAGES':
            return {
                ...state,
                pageNumbers: action.payload
            }
        default:
            return state
    }
}