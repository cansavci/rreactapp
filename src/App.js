import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './Practice/UserInput'
import UserOutput from './Practice/UserOutput'

class App extends Component {
  state={
    persons: [
      {name: 'Can', age:26 },
      {name: 'Mia', age:24 }
    ]
  }

  switchButtonHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        {name: newName, age:26 },
        {name: 'Mia', age:24 }
      ]
    }
      
    )
    //this.state.persons[0].name = 'Mustafa Can'
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age:26 },
        {name: 'Mia', age:24 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => { return this.switchButtonHandler('M.Can')}}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchButtonHandler.bind(this,'Can!!!!')}
          changed={this.nameChangedHandler}>
            Car enthusiast
        </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>
            Reading, walking
          </Person>
        <UserInput />
        <UserOutput name="Can" />
        <UserOutput name="Mia" />
      </div>
    );
    // return React.createElement('div', null,
    // React.createElement('h1', {className: 'App'},'Hi, I\'m a React App!!!'))
  }
}

export default App;
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}