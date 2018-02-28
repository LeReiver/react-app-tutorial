import React from 'react';
import './Person.css';

const person = (props) => {
    return (
      <div className="Person" >
        <p> I'm {props.name} and I am {props.age} years old!</p>
        <h3 onClick={props.click}>{props.children}</h3>
        <input type="text" onChange={props.changed} value={props.name}/>
      </div>
    )
}

export default person;