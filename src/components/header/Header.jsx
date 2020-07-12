import React, { useState } from 'react'

const Header = () => {
    const [ title, setTitle ] = useState(false)

    return (
        <div className="header">
            { title && <h1 data-testid="title">Hello World</h1> }
            <button
                className="btn-test"
                onClick={() => setTitle(!title)}
            >Click</button>
        </div>
    )
}

export default Header
