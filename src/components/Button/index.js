import React from 'react';

function Button(props) {
    return(
        <button type="button" class="btn btn-primary col-5">{props.text}</button>
    )

}

export default Button;