import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const { id, title } = props.post

    return (
        <div className="card">
            <Link to={`/${id}`}>
                <h2>{title}</h2>
            </Link>
        </div>
    )
}

export default Card
