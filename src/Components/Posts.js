import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changePage } from '../store/actions/postActions'

import Card from './Card'
import Pagination from './Pagination'

const Posts = () => {
    const dispatch = useDispatch()

    const posts = useSelector(state => state.posts.posts)

    const currentPage = useSelector(state => state.posts.currentPage)
    const postsPerPage = useSelector(state => state.posts.postsPerPage)

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = page => dispatch(changePage(page))

    return (
        <div className="posts">
            <h1>Posts</h1>
            <Pagination 
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <div className="cards_holder">        
                {
                    currentPosts.length !== 0 ?
                    currentPosts.map(post => (
                        <Card 
                            key={post.id}
                            post={post}
                        />
                    )) : ''
                }
            </div>
        </div>
    )
}

export default Posts