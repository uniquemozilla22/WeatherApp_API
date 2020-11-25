import React from 'react'
import HOC from '../HOC/HOC'
import './Card.css'

const Card = (props) => {
    return (
        <HOC>
            <div className="card-container">
            <img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	            <h3>Sunny</h3>
	            <h2><i className="fa fa-location"></i>{props.location.city}</h2>
	            <h6>{props.location.country}</h6>
	            <p> Temp : {props.temperature.high} C to {props.temperature.low}</p>
            </div>
        </HOC>
    )
}

export default Card
