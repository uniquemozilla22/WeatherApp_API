import React from 'react'
import HOC from '../HOC/HOC'
import Card from '../card/Card'
import Form from '../Form/Form'
 const Body=(props)=>{
        return (
            <HOC>
                <Form></Form>
                <Card {...props} ></Card>
            </HOC>
        )
}


export default Body
