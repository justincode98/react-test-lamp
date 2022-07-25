import React from 'react';
import Button from "../Button";
function NavBar() {
    return (
        <header>
            <Button text="About Me" />
            <Button text="Portfolio" />
            <Button text="Contact" />
            <Button text="Resume" />
        </header>
    )
}

export default NavBar;