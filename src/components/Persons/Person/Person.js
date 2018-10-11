import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] componentDidMount');
  }

  componentWillReceiveProps(props) {
    console.log('Person.js] componentWillReceiveProps()', props);
  }

  render() {
    console.log('[Person.js] render()');

    return (
      <div className={classes.Person}>
        <p onClick={this.props.clickHandler}>Hello Im a {this.props.name}, Im a {this.props.age} old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
      </div>
    )
  }
};

export default Person;
