import React from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './style.css'

const SearchBar = ({ placeholder, value, onChange, onClick }) => {
    return(
        <div className="searchBar">
            <Input 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <Button onClick={onClick}/>
        </div>
    )
}

export default SearchBar;