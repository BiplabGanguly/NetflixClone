import React from 'react'
import img from '../images/netflix-logo-png-2582.png'

export const NavBar = () => {

    return (
        <div>
            <nav className='navbar'>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        <img src={img} className = 'navimg' alt="" />
                    </span>
                </div>
            </nav>
        </div>
    )
}
