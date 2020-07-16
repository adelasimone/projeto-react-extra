import React from 'react';
import './style.css'

const Input = ({placeholder, value, onChange}) => {
    return(
        <input 
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
    )
}

export default Input;