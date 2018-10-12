import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

export const AuthContext = React.createContext(false);

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor', props);
    }
    
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    componentDidUpdate() {
        console.log('App.js] componentDidUpdate()');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('App.js] getDerivedStateFromProps()', nextProps, prevState);
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log('App.js] getSnapshotBeforeUpdate()');
        return null;
    }

    state = {
        persons: [
            { id: 1, name: 'Blake', age: 65 },
            { id: 2, name: 'Manu', age: 76 },
            { id: 3, name: 'Nathan', age: 76 }
        ],
        authenticated: false
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

    loginHandler = () => {
        this.setState({ authenticated: true });
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
                <button onClick={() => { this.setState({ showPersons: true }) }}>Show Persons</button>
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    toggle={this.togglePersonsHandler}
                    loginHandler={this.loginHandler}
                    appTitle={this.props.title}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </div>

        );
    }
}

export default App;
