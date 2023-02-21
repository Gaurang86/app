import React, { useState } from 'react'
import { DsaStyle } from './style'
const Dsa = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editIndex, setEditIndex] = useState(-1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) return
    if (editIndex === -1) {
      setTodos([...todos, { text: inputValue, color: '#ffffff' }])
    } else {
      const newtodos = [...todos]
      newtodos[editIndex].text = inputValue
      setTodos(newtodos)
      setEditIndex(-1)
    }
    setInputValue('')
  }
  const handleDelete = (id) => {
    const newtodos = [...todos]
    newtodos.splice(id, 1)
    setTodos(newtodos)
  }
  const handleEdit = (id) => {
    setEditIndex(id)
    setInputValue(todos[id].text)
  }
  const handleColorChange = (id, color) => {
    const newtodos = [...todos]
    newtodos[id].color = color
    setTodos(newtodos)
  }
  return (
    <DsaStyle>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, id) => (
          <li key={id}>
            <div className="container">
              <button className="btn" onClick={() => handleEdit(id)}>
                Edit
              </button>
              <p
                style={{
                  backgroundColor: todo.color,
                  width: '10em',
                  textAlign: 'center',
                  height: '2em',
                }}
              >
                {todo.text}
              </p>
              <button className="btn" onClick={() => handleDelete(id)}>
                Delete
              </button>
              <select
                className="selector"
                value={todo.color}
                onChange={(e) => handleColorChange(id, e.target.value)}
              >
                <option value="#ffffff">White</option>
                <option value="#0080ff">Blue</option>
                <option value="#00ff00">Green</option>
                <option value="#ff0000">Red</option>
              </select>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </DsaStyle>
  )
}
export default Dsa
