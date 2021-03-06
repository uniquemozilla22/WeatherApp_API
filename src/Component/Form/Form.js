import React,{Component} from 'react'
import HOC from '../HOC/HOC'
import Container from 'react-bootstrap/Container'
import Input from './Input/Input.js'
import './Form.css'
import Card from '../card/Card'
import Axios from 'axios'

class Form extends Component {
    
  state = {
    city:"kathmandu",
    temperature:100,
    location:'error',
    weather_type:""
  }

  componentDidMount() {
      this.AxiosFetcher();
  }

  onChangeHandler=(e)=>{
    this.setState({
        ...this.state,
        city:e.target.value,
    })
  }

  AxiosFetcher=()=>{
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
        },
        weather_type:response.data.weather[0].main
      })
    })
  }

  onClickHandler = (event)=>{
    event.preventDefault();

    this.AxiosFetcher();
  }
    render() {

        return (
            <HOC>
                <Container >
                    <form className="country-form row">
                    <div className="form-group col-6">
                        <Input label="City :" size="lg" change={(e)=>this.onChangeHandler(e)}></Input>
                    </div>
                    <div className="form-group col-6">
                        <Input label="Country :" size="lg"></Input>
                    </div>
                    <button type="submit" className="" onClick={(event)=>this.onClickHandler(event)}></button>
                    </form>
                </Container>
                <Container>
                <Card temperature={this.state.temperature} location={this.state.location} weatherType={this.state.weather_type}></Card>
                </Container>
            </HOC>
        )
    }
    
    
}

export default Form
