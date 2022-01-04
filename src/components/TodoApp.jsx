import { useState } from 'react'

// Features:
// [*] Add Todo

// [*] Remove todo
// [*] Change completion status

// * Update todo

export default function TodoApp () {
  const [todos, setTodos] = useState([
    {
      name: 'Memancing',
      completed: false
    },
    {
      name: 'Mengaji',
      completed: false
    }
  ])

  const [text, setText] = useState('')

  const handleTextChange = event => {
    const value = event.target.value
    setText(value)
  }

  // Mutate / mutasi / merubah secara langsung
  // Add todo
  const handleAddTodo = event => {
    event.preventDefault()
		const clonedTodos = [...todos]

		clonedTodos.push({
			name: text,
			completed: false
		})

    // const submitTodo = [
    //   ...todos,
    //   {
    //     name: text,
    //     completed: false
    //   }
    // ]

    setTodos(clonedTodos)
    setText('')
  }

  const removeTodo = clickedIndex => {
    // Hapus object yg listnya di klik
    const filteredTodo = todos.filter(
      (_, actualIndex) => actualIndex !== clickedIndex
    )
    setTodos(filteredTodo)
  }

	// On completed todo
  const onCompleted = index => {
    // Map: merubah => mentransformasi item di dalam array
    const updated = todos.map(function (todo, idx) {
			if (idx === index) {
				return {
					...todo,
					completed: !todo.completed
				}
			} else {
				return todo
			}
    })
    setTodos(updated)
  }

	// Update todo
	const handleUpdateTodo = () => {}

	console.log(todos)

  return (
    <div className='todo-app'>
      {/* TodoForm */}
      <form className='todo-form' onSubmit={handleAddTodo}>
        <input
          type='text'
          className='todo-input'
          placeholder='Masukan task hari ini'
          value={text}
          onChange={handleTextChange}
        />
        <input type='submit' value='Add Todo+' className='todo-button' />
      </form>

      {/* TodoList */}
      <ul className='todo-list'>
        {todos.map((todo, index) => {
          return (
            <li key={index} className='todo-item'>
              <input
                type='checkbox'
                checked={todo.completed}
                onChange={() => onCompleted(index)}
              />

              {todo.name}

              <button className='todo-remove' onClick={() => removeTodo(index)}>
                🗑
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
