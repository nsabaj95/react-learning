import {addTodo,findById, toggleTodo,updateTodo, removeTodo} from './todoHelpers'

test('addTodo should add the passed todo to the list', () => {
    const startTodos = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false}
    ]
    const newTodo = {id:3, name: 'three', isComplete: false}
    const expected = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]

    const result = addTodo(startTodos, newTodo)

    expect(result).toEqual(expected)
})

test('findById should retrieve the correct todo', () => {
    const todos = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
    const expected = {id:2, name: 'two', isComplete: false}
    
    let result = findById(todos, expected.id)

    expect(result).toEqual(expected)
})

test('toggleTodo should toggle the isComplete prop in a todo', () => {
    const expected = {id:2, name: 'two', isComplete: false}
    const updated = toggleTodo(expected)
    expect(expected).not.toBe(updated)
})

test('updateTodo should update an item by id', () => {
    const expected = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
    const todo = {id:3, name: 'three', isComplete: true}

    const result = updateTodo(expected, todo)

    expect(result).not.toBe(expected)
})

test('removeTodo should remove an item by id', () => {
    const startTodos = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
    const targetId = 2
    const expectedTodos = [
        {id:1, name: 'one', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
    const result = removeTodo(startTodos, targetId)

    expect(result).toEqual(expectedTodos)
})


test('removeTodo should not mutate the original array', () => {
    const startTodos = [
        {id:1, name: 'one', isComplete: false},
        {id:2, name: 'two', isComplete: false},
        {id:3, name: 'three', isComplete: false}
    ]
    const targetId = 2
    const result = removeTodo(startTodos, targetId)

    expect(result).not.toBe(startTodos)
})