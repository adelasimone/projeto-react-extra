import React from 'react';
import iconSearch from '../../icons/search-icon.svg'
import './style.css'

const Button = ({ onClick }) => {
    return(
        <button onClick={onClick}>
            <img src={iconSearch} alt="Ícone de busca"/>
        </button>
    )
}

export default Button