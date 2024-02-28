import React, {Component} from 'react';
import logo from './logo.svg';
// import Main from './Main';
import Main2 from './Main2';
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Main2 phone={1536478920} email="random@gmail.com" website="web.com"/>
      </div>
    );
  }
}

export default App;