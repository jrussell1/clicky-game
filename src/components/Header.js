import React from 'react';

const Header = props => (
    <div className="container text-center" id="header-container">
        <h1 id="logo"><b>Clicky Game</b></h1>
        <h5 className="subtitle">Click on an image once. <br/> If you click it again your counter goes back to 0.</h5>
    </div>
)

export default Header;