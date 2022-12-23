import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ({onAddCategory}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInput = ({target}) => { 
    setInputValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
    if(inputValue < 1) return;

    onAddCategory(inputValue.toLowerCase().trim())
    setInputValue('')
  }

  return (
    <form 
      onSubmit={handleSubmit}
      aria-label='form'
    > 
      <input 
        type="text"
        placeholder="category"
        value={inputValue}
        onChange={handleInput}
      />
    </form>
  )
}

AddCategory.propTypes = { 
  onAddCategory: PropTypes.func.isRequired
}