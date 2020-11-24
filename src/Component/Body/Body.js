import React, { Component } from 'react'
import HOC from '../HOC/HOC'
import Card from '../card/Card'
import Form from '../Form/Form'
 class Body extends Component {

    render() {
        return (
            <HOC>
                <Form></Form>
                <Card ></Card>
            </HOC>
        )
    }
}


export default Body