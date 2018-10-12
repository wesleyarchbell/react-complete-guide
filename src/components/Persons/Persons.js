import React, { PureComponent } from 'react';
import Person from './Person/Person'

class Persons extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[Persons.js] constructor', props);
        this.lastPerson = React.createRef();
    }

    componentWillMount() {
        console.log('[Persons.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] componentDidMount');
        this.lastPerson.current.focus();
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
                index={index}
                ref={this.lastPerson}
            />
        });
    }
}

export default Persons;

