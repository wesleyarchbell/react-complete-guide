import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: 'Blake', age: 65},
      {id: 2, name: 'Manu', age: 76},
      {id: 3, name: 'Nathan', age: 76}
    ]
  }

  nameInputHandler = (event, id) => {

    console.log('event');
    const personIndex = this.state.persons.findIndex(it => {
      return it.id === id}
    );
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {   

    let buttonClass = '';
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons 
            clicked={this.deletePersonHandler} 
            changed={this.nameInputHandler}
            persons={this.state.persons}
          />
        </div>
      );
      buttonClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    

    return (
      <div className={classes.App}>
        <h1>Hi I'm a react app</h1>
        <p className={assignedClasses.join(' ')}>It's really working.</p>
        <button className={buttonClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}

export default App;
