import React from 'react'
import Card from '../card/Card'
import HOC from '../HOC/HOC'

const Background = (props) => {
    return (
        <HOC>
            <div className="background-component" style={{"backgroundImage":props.image}}>
                <Card ></Card>
            </div>
        </HOC>
    )
}

export default Background
