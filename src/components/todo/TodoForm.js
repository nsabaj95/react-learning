import React from 'react'
import PropTypes from 'prop-types'

export const TodoForm = (props) => (
    <form>
        <input type="text" 
        onChange={props.handleInputChange} 
        value={props.currentTodo}/>
        <button onClick={props.handleSubmit}>Add</button>
    </form>
)

TodoForm.propTypes = {
    currentTodo: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}