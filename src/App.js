import React, { Component} from 'react'
import './App.css';
import Body from './Component/Body/Body';
import Axios from 'axios'

class App extends Component {

  state = {
    city:"london,uk",
    temperature:0,

  }

  componentDidMount() {
    Axios.get("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=6b066cec1443acf9f049b9390bdf23ef").then(response =>{
      console.log(response.data)
    })
  }

  render() {
    return (
      <div className="App">
        <Body temperature={this.state.temperature} />
      </div>
    );
  }
  
}

export default App;
