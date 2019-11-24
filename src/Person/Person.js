import React from 'react'
import './Person.css'

const Person = (props, children) => {
return(
<div className="Person"> 
    <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
    <p>{props.name}'s hobbies are :{props.children}</p>
    <input type="text" value={props.name} onChange={props.changed}/>
</div>)
}

export default Person;