import React from 'react'

const Button = ({ btnText, styles }) => {
    return (
        <button type="submit" style={styles ? styles : defaultStyles}>
            { btnText ? btnText : '...' }
        </button>
    )
}

const defaultStyles = {
    backgroundColor: 'red',
    color: '#fff',
}

export default Button
