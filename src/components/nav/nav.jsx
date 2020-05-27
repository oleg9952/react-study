import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.scss'

const nav = () => {
    return (
        <div className={style.nav}>
            <div className={style.nav__body}>
                <NavLink
                    className={style.nav__li}
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={style.nav__li}
                    to="/bots"
                >
                    Bots
                </NavLink>
            </div>
        </div>
    )
}

export default nav
