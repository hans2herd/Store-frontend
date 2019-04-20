import React from 'react';

const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="container">
                <div className="brand-logo">Jurgen Operations</div>
                    <ul className="right">
                       <li><button href="/">Home</button></li>
                       <li><a href="/cart">Cart</a></li>
                       <li><a href="/inventory">Inventory</a></li>
                    </ul>
            </div>
        </nav>

    )
}

export default Navbar