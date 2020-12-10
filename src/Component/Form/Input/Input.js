import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import SelectField from 'react-bootstrap/SelectableContext'
import './Input.css'
import HOC from '../../HOC/HOC'

const Input = (props) => {
    return (
        <HOC>

<InputGroup size={props.size} className="input-form mb-3">
                    <InputGroup.Prepend>
                     <InputGroup.Text id={"inputGroup-sizing-"+props.size}>{props.label}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby={"inputGroup-sizing-"+props.size} onChange={(e)=>props.change(e)}/>
                </InputGroup>
        </HOC>
        
    )
}

export default Input
