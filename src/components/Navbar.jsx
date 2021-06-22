import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <li>
                <Link to="/">Qui suis-je ?</Link>
            </li>
            <li>
                <Link to="/">Compétences</Link>
            </li>
        </nav>
    )
}

export default Navbar
