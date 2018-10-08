import React from 'react';
import './Person.css';

const person = (props) => {

    return (
      <div className="Person">
        <p onClick={props.clickHandler}>Hello Im a {props.name}, Im a {props.age} old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
      </div>
    )
};

export default person;