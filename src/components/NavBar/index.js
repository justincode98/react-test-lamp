import React from 'react';
import Button from "../Button";
function NavBar(props) {
    console.log("at navbar " + props.state)
    return (
        //retrieves pageState and setPageState from app->header->navbar, then returns/bubbles pageState to app for if/else
        //don't need to pass in pagestate?
        
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <container class="d-flex flex-row mb-1">

                    <Button text="About Me" state={props.state} setState={props.setState}/>
                    <Button text="Portfolio" state={props.state} setState={props.setState}/>
                    <Button text="Contact" state={props.state} setState={props.setState}/>
                    <Button text="Resume" state={props.state} setState={props.setState}/>            
                    
                </container>
                
            </nav>
           
        </header>
    )
}

export default NavBar;