import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ( { setCategories }) => {
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({target}) => {
        // console.log(e.target.value);
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( categorie => [inputValue, ...categorie])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                placeholder='Agrega tu serie'
                onChange={handleInputChange} 
            />
        </form>
    )
}

export default AddCategory


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}