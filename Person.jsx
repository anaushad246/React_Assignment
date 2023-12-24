import React from "react";

function Person(props){
    return(
        <>
        <p>My name is {props.name}.</p>
        <p>I am {props.age} year old.</p>
        </>
    )
}
export default Person;