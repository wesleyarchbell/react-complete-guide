import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('Persons.js] componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('Persons.js] componentDidUpdate()');
    }

    render() {
        console.log('[Persons.js] render');

        return this.props.persons.map((it, index) => {
            return <Person
                clickHandler={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, it.id)}
                name={it.name}
                age={it.age}
                key={it.id}
            />
        });
    }
}

export default Persons;

