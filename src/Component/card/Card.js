import React from 'react'
import HOC from '../HOC/HOC'
import './Card.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSun,faCloud,faCloudRain, faThermometerHalf, faLocationArrow, faLowVision, faFrog, faSmog, faCloudSunRain} from '@fortawesome/free-solid-svg-icons'




const Card = (props) => {
let weather_icon = "";

switch (props.weatherType)
{
    case "Clouds":{
    weather_icon=<FontAwesomeIcon icon={faCloud} size="lg" />
        break;
    }
    case "Mist":{
    weather_icon=<FontAwesomeIcon icon={faCloudRain} size="lg" />
    break;
    }
    case "Smoke":{
    weather_icon=<FontAwesomeIcon icon={faSmog} size="lg" />
    break;
    }
    case "Sunny":{
        weather_icon=<FontAwesomeIcon icon={faCloudSun} size="lg" />
        break;
        }
    default:{
        weather_icon =  <FontAwesomeIcon icon={faSun} size="lg" />
    }
}
    return (
        <HOC>
            <div className="card-container">
            <div className="row">
                <div className="image-container col">
                    {weather_icon}
                </div>
                <div className="Weather col">
                    <div className="row">
                        <div className="col-2">
                        <FontAwesomeIcon icon={faLocationArrow} size="lg"/>
                        </div>
                        <div className="col">
                        <h2>{props.location.city},{props.location.country}</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-2">
                        <FontAwesomeIcon icon={faThermometerHalf} size="lg"/>
                        </div>
                        <div className="col">
                        <h4>{props.temperature.temp} </h4>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-2">
                        <FontAwesomeIcon icon={faLowVision} size="lg"/>
                        </div>
                        <div className="col">
                        <h4>{props.temperature.temp} </h4>
                        </div>

                    </div>
	            <p> <FontAwesomeIcon icon={faThermometerHalf} size="lg"/> : {props.temperature.high} C to {props.temperature.low}</p>            
                </div>
            </div>
            <div className="row">
                <div className="image-container col">                     
                <h3>{props.weatherType}</h3>

                </div>
                <div className="Weather col">
                </div>
            </div>
	         </div>
        </HOC>
    )
}

export default Card
