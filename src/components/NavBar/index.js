import React from 'react';
import Button from "../Button";
function NavBar() {
    return (
        
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <container class="d-flex flex-row mb-1">
                    <Button text="About Me" />
                    <Button text="Portfolio" />
                    <Button text="Contact" />
                    <Button text="Resume" />            
                    
                </container>
                
            </nav>
           
        </header>
    )
}

export default NavBar;