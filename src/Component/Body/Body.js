import React, { Component } from 'react'
import HOC from '../HOC/HOC'
import Axios from 'axios'
import Card from '../card/Card'
import Background from '../Background/Background'
 class Body extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <HOC>
                <Background > </Background>
            </HOC>
        )
    }
}


export default Body