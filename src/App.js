import React, { Component} from 'react'
import './App.sass';
import Body from './Component/Body/Body';
import Axios from 'axios'

class App extends Component {

  state = {
    city:"london,uk",
    temperature:100,
    location:'error',


  }

  componentDidMount() {
    Axios.get("https://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid=6b066cec1443acf9f049b9390bdf23ef").then(response =>{
      console.log(response.data)

      this.setState({
        ...this.state,
        temperature:{
          high:response.data.main.temp_max,
          low:response.data.main.temp_min,
          temp:response.data.main.temp,          
        },
        location:{
          country:response.data.sys.country,
          city:response.data.name
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Body temperature={this.state.temperature} location={this.state.location}/>
      </div>
    );
  }
  
}

export default App;
