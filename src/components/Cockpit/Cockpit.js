import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Cockpit.css';

const cockpit = (props) => {

    const assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    let buttonClass = classes.Button;
    if (props.showPersons) {
        buttonClass = [classes.Button, classes.Red].join(' ');
    }

    return (
        <Aux>
            <h1>Hi I'm a react app</h1>
            <p className={assignedClasses.join(' ')}>{props.appTitle}</p>
            <button className={buttonClass} onClick={props.toggle}>Toggle Persons</button>
            <button onClick={props.loginHandler}>Login</button>
        </Aux>
    )
}

export default cockpit;