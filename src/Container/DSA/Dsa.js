import React, { useState } from 'react'
import { DsaStyle } from './style'
const Dsa = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editIndex, setEditIndex] = useState(undefined)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputValue) return
    if (editIndex === undefined) {
      setTodos([...todos, { text: inputValue, color: '#ffffff' }])
    } else {
      const newtodos = [...todos]
      newtodos[editIndex].text = inputValue
      setTodos(newtodos)
      setEditIndex(-1)
    }
    setInputValue('')
  }
  const handleDelete = (index) => {
    const newtodos = [...todos]
    newtodos.splice(index, 1)
    setTodos(newtodos)
    if (editIndex === index) {
      setEditIndex(-1)
      setInputValue('')
    } else if (editIndex > index) {
      setEditIndex(editIndex - 1)
    }
  }
  const handleEdit = (index) => {
    setEditIndex(index)
    setInputValue(todos[index].text)
  }
  const handleColorChange = (index, color) => {
    const newtodos = [...todos]
    newtodos[index].color = color
    setTodos(newtodos)
  }
  return (
    <DsaStyle>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <div className="container">
              <button className="btn" onClick={() => handleEdit(index)}>
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
              <button className="btn" onClick={() => handleDelete(index)}>
                Delete
              </button>
              <select
                className="selector"
                value={todo.color}
                onChange={(e) => handleColorChange(index, e.target.value)}
              >
                <option value="#ffffff">White</option>
                <option value="#0080ff">Blue</option>
                <option value="#005500">Green</option>
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
