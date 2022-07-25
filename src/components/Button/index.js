import React from 'react';

function Button(props) {
    function clickedButton() {
        //props.setPageState = props.text
        //console.log(props.text)
        console.log("before button click " + props.state)
    }
    return(
        <button type="button" class="btn btn-primary col-5" onClick={clickedButton}>{props.text}</button>
    )

}

export default Button;