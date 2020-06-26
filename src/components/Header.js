import React from 'react';
import '../index.css';

function Header() {
    return(

        <nav className='navbar d-flex justify-content-center'>
            <ul className='nav flex-column text-center'>
                <li className='nav-item'>
                    <span className='navbar-brand h1'>Employee Directory</span>
                </li>
                <li className='nav-item text-light mb-3'>
                    <span className='h6'>Use the search bar to narrow your results by name.</span>
                </li>
            </ul>
        </nav>

    )
};

export default Header;