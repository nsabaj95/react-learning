import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm,TodoList} from './components/todo'
import {addTodo,generateId,findById,toggleTodo,updateTodo, removeTodo} from './lib/todoHelpers'
import {partial,pipe} from './lib/utils'

class App extends Component {
  state = {
    todos: [
      { id: 1, name: 'Leaern JSX', isComplete: true },
      { id: 2, name: 'Build an awesome app', isComplete: false },
      { id: 3, name: 'Ship it!', isComplete: false },
    ],
    currentTodo: ''
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    let updatedList = getUpdatedTodos(this.state.todos, id)
    this.setState({
      todos: updatedList
    })
  }

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = { id:newId, name:this.state.currentTodo, isComplete: false}
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: '',
      errorMessage: ''
    })
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
    this.setState({
      errorMessage: 'Please supply a todo name'
    })
  }

  render() {
    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Todos
        </p>
      </header>
      <div className="Todo-App">
        {this.state.errorMessage && <span className='error'>{this.state.errorMessage}</span>}
        <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} handleSubmit={submitHandler} />
        <TodoList handleRemove={this.handleRemove} handleToggle={this.handleToggle} todos={this.state.todos} />
      </div>
    </div>)
  }
}

export default App;
