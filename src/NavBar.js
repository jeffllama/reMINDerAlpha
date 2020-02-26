import React from 'react';
// React router user another component to link
import {Link} from 'react-router-dom';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                {/* Link syntax, to (prop) what url to link to when we click */}
                <Link to ="/">HOME</Link>          
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/articles-list">Articles</Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;