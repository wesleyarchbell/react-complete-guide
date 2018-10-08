import React from 'react';
import Person from './Person/Person'

const persons = (props) => props.persons.map((it, index) => 
        <Person
            clickHandler={() => props.clicked(index)}
            changed={(event) => props.changed(event, it.id)}
            name={it.name}
            age={it.age}
            key={it.id}
            />
      );

export default persons;      

