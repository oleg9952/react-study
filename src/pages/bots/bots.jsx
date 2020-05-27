import React from 'react'
import style from './bots.module.scss'

const bots = () => {
    return (
        <div className={style.bots}>
            <h1 className={style.bots__title}>Bots Page</h1>
            <p className={`
                ${style.home__text}
                animate__animated
                animate__lightSpeedInLeft
                animate__fast
                animate__delay
            `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis atque voluptate necessitatibus? Pariatur culpa repellat natus maiores, iste corporis non possimus fuga delectus quo ratione soluta ipsa molestias quidem architecto.</p>
        </div>
    )
}

export default bots
