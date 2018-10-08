import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'green',
      textColor: 'white',
      font: 'inhereit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((it, index) => {
              return <Person
                clickHandler={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameInputHandler(event, it.id)}
                name={it.name}
                age={it.age}
                key={it.id}
                />
            })
          }
        </div>
      );

      style.backgroundColor = 'red';
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hi I'm a react app</h1>
        <p className={classes.join(' ')}>It's really working.</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>

    );
  }
}

export default App;
