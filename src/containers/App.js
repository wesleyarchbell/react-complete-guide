import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends PureComponent {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }
  
  componentWillUpdate(nextProps, nextState) {
    console.log('App.js] componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('App.js] componentDidUpdate()');
  }

  state = {
    persons: [
      { id: 1, name: 'Blake', age: 65 },
      { id: 2, name: 'Manu', age: 76 },
      { id: 3, name: 'Nathan', age: 76 }
    ]
  }

  nameInputHandler = (event, id) => {

    console.log('event');
    const personIndex = this.state.persons.findIndex(it => {
      return it.id === id
    }
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
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    console.log('[App.js] render');

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
    }

    return (
      <div className={classes.App}>
        <button onClick={() => { this.setState({ showPersons : true })}}>Show Persons</button>  
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggle={this.togglePersonsHandler}
          appTitle={this.props.title}
        />
        {persons}
      </div>

    );
  }
}

export default App;
