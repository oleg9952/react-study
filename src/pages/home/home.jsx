import React from 'react'
import style from './home.module.scss'

const home = () => {
    return (
        <div className={style.home}>
            <h1 className={style.home__title}>Home Page</h1>
            <p className={`
                ${style.home__text}
                animate__animated
                animate__lightSpeedInLeft
                animate__fast
                animate__delay
            `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis iusto necessitatibus delectus incidunt asperiores vitae accusamus obcaecati voluptas in saepe veritatis, unde animi dicta illum alias sit libero laborum ipsa? Ad doloremque sequi consectetur magnam sed facilis sapiente facere consequuntur nobis error, blanditiis maxime unde minima mollitia maiores tenetur modi!</p>
        </div>
    )
}

export default home
