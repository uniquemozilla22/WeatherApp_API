import React from 'react'
import HOC from '../HOC/HOC'
import Container from 'react-bootstrap/Container'
import Input from './Input/Input.js'
import './Form.css'

const Form = (props) => {
    return (
        <HOC>
            <Container >
                <form className="country-form row">
                <div className="form-group col-8">
                    <Input label="City" size="md"></Input>
                </div>
                <div className="form-group col-4">
                    <Input label="Country" size="md"></Input>
                </div>
                </form>
            </Container>
        </HOC>
    )
}

export default Form
