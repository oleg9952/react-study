import React from 'react'
import { useDispatch } from 'react-redux'
import { goNext, goBack, setPaginatePages } from '../store/actions/postActions'

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
    const pageNumbers = []

    const dispatch = useDispatch()

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }
    
    const style = {
        fontWeight: 'bold',
        color: 'red',
        fontSize: '24px',
        textDecoration: 'underline'
    }

    const run = () => {
        let n = pageNumbers.length
        return dispatch(setPaginatePages(n))
    }

    run()

    

    return (
        <div className="pagination_holder">
            <button
                onClick={() => dispatch(goBack())}
            >Back</button>
            <ul className="pagination">
                {
                    pageNumbers.length !== 0 ?
                    pageNumbers.map(page => (
                        <li 
                            style={currentPage === page ? style : null}
                            key={page}
                            onClick={() => paginate(page)}
                        >{page}</li>
                    )) : ''
                }
            </ul>
            <button
                onClick={() => dispatch(goNext())}
            >Next</button>
        </div>
    )
}

export default Pagination
