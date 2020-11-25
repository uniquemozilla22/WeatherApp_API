import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

const Input = (props) => {
    return (
        
            <InputGroup size={props.size} className="mb-3">
                    <InputGroup.Prepend>
                     <InputGroup.Text id={"inputGroup-sizing-"+props.size}>{props.label}</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl aria-label="Small" aria-describedby={"inputGroup-sizing-"+props.size} />
                </InputGroup>
    )
}

export default Input
