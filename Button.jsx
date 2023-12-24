import React from "react";

function Button(props){
    
    return(
        <>
        <button onClick={props.btnFunction}>{props.btnText}</button>
        </>
    )
}
export default Button;