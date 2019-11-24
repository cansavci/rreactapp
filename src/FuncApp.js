import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
    const [personState, setPersonsState] = useState({
            persons: [
                {name: 'Can', age:26 },
                {name: 'Mia', age:24 }
              ]
            });

    const [otherState, setOtherState] = useState(
        "some other value"
    );        
    const switchButtonHandler = () => {
        //console.log('Was clicked!');
        setPersonsState({
          persons: [
            {name: 'M.Can', age:26 },
            {name: 'Mia', age:24 }
          ]
        }
          
        )
        //this.state.persons[0].name = 'Mustafa Can'
      }
            
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={switchButtonHandler}>Switch Name</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age}>Car enthusiast</Person>
        <Person name={personState.persons[1].name} age={personState.persons[1].age}>Reading, walking</Person>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
    // return React.createElement('div', null,
    // React.createElement('h1', {className: 'App'},'Hi, I\'m a React App!!!'))
}

export default app;
