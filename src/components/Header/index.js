import React from 'react';
import NavBar from "../NavBar";
function Header(props) {
    console.log("at header state is " + props.state)
    return (
        <NavBar state={props.state} setState={props.setState}></NavBar>
    )
}

export default Header;