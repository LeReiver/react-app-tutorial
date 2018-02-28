import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Michael', age: 44 },
      {name: 'Jack', age: 39 },
      {name: 'Larry', age: 55 },
    ]
  }
  updatePersonHandler = (newName) => {
    this.setState({persons: [
        {name: 'Mike', age: 44 },
        {name: 'Jack', age: 39 },
        {name: newName, age: 56 },
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({persons: [
        {name: 'Miguel', age: 44 },
        {name: event.target.value, age: 39 },
        {name: 'Lisa', age: 56 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Name Changer with React.js</h1>
        <button
          onClick={this.updatePersonHandler.bind(this, 'Mikey')}>Change Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>
          Type below to change name
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.updatePersonHandler.bind(this, 'Marlena')}
        >Click Me!
        </Person>
      </div>
    );
  }
}

export default App;
