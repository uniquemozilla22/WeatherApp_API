import React, { Component} from 'react'
import './App.sass';
import Body from './Component/Body/Body';
import Axios from 'axios'

class App extends Component {


  render() {
    return (
      <div className="App">
        <Body />
      </div>
    );
  }
  
}

export default App;
