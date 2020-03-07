export const addTodo = (list, item) => [...list, item]

export const generateId = () => Math.floor(Math.random() * 10000)

// export const findById = (list, id) => {
//     let item = null
//     let i = 0
    
//     while (item === null && i < list.length) {
//         if(list[i].id === id) {
//             item = list[i]
//         }
        
//         i++
//     }

//     return item
// }

export const findById = (list, id) => list.find(todo => todo.id === id)

// export const toggleTodo = (todo) => todo.isComplete = !todo.isComplete

export const toggleTodo = (todo) => ({...todo, isComplete: !todo.isComplete})

export const updateTodo = (list, updatedTodo) => {
    const updatedIndex = list.findIndex(item => item.id === updatedTodo.id)

    return [
        ...list.slice(0, updatedIndex),
        updatedTodo,
        ...list.slice(updatedIndex + 1, list.length)
    ]
}

export const removeTodo = (list, id) => {
    const removedIndex = list.findIndex(item => item.id === id)

    return [
        ...list.slice(0, removedIndex),
        ...list.slice(removedIndex + 1, list.lengq)
    ]
}