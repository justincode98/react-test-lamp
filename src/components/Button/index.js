import React from 'react';

function Button(props) {
    return(
        <button type="button" class="btn btn-primary">{props.text}</button>
    )

}

export default Button;