import React from 'react'
import { useSelector } from 'react-redux'

const PostPage = (props) => {
    const posts = useSelector(state => state.posts.posts)
    const currentPost = posts[props.match.params.id - 1]

    return (
        <div className="post_page">
            {
                currentPost !== undefined ?
                (
                    <div>
                        <h1 className="post_page_title">{currentPost.title}</h1>
                        <p className="post_details">
                            {currentPost.body}
                        </p>
                    </div>
                ) : ''
            }
        </div>
    )
}

export default PostPage
