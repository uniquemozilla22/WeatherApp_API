import React from 'react'
import HOC from '../HOC/HOC'
import './Card.css'

const Card = (props) => {
    return (
        <HOC>
            <div className="card-container">
	<img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>Sunny</h3>
	<h2>New York</h2>
	<h6>USA</h6>
	<p> Temp : 25 C</p>
</div>
        </HOC>
    )
}

export default Card
