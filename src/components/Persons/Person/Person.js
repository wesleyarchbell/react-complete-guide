import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types'
import { AuthContext } from '../../../containers/App'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] componentDidMount');
        if (this.props.index === 0) {
            this.inputElement.current.focus();
        }
    }

    componentWillReceiveProps(props) {
        console.log('Person.js] componentWillReceiveProps()', props);
    }

    focus() {
        this.inputElement.current.focus();
    }

    render() {
        console.log('[Person.js] render()');

        return (
            <div className={classes.Person}>
                <AuthContext.Consumer>
                    {(authenticated) => authenticated ? <p>Authenticated</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.clickHandler}>Hello Im a {this.props.name}, Im a {this.props.age} old.</p>
                <p>{this.props.children}</p>
                <input ref={this.inputElement}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name}>
                </input>
            </div>
        )
    }
};

Person.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    clickHandler: PropTypes.func,
    changed: PropTypes.func
};

export default Person;
