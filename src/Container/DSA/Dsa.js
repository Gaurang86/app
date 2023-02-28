import React, { useState } from 'react'
import { DsaStyle } from './style'
const Dsa = () => {
  const [todos, setTodos] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [editIndex, setEditIndex] = useState(undefined)
  console.log(typeof editIndex)
  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedValue = inputValue.trim()
    if (!trimmedValue) return setInputValue('')
    if (!inputValue) return
    if (editIndex === undefined) {
      setTodos([...todos, { text: inputValue, color: '#9966ff' }])
    } else {
      const newtodos = [...todos]
      newtodos[editIndex].text = inputValue
      setTodos(newtodos)
      setEditIndex(undefined)
    }
    setInputValue('')
  }
  const handleDelete = (index) => {
    const newtodos = [...todos]
    newtodos.splice(index, 1)
    setTodos(newtodos)
    console.log('editIndex', editIndex, index)
    if (editIndex === index) {
      setEditIndex(undefined)
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
      <div className="container">
        <h1>Todo App</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="minpt"
            type="text"
            placeholder="Add a new todo"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button className="ibtn" type="submit">
            Add
          </button>
        </form>
        <span>Total Task : {todos?.length}</span>
        <hr />
      </div>
      <ul>
        {todos?.map((todo, index) => (
          <li key={index}>
            <div
              className="map-container"
              style={{ backgroundColor: todo.color }}
            >
              <p>{todo.text}</p>
              <div className="allbtn">
                <button
                  className="btn"
                  style={{ backgroundColor: todo.color }}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className="btn"
                  style={{ backgroundColor: todo.color }}
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <select
                  className="selector"
                  value={todo.color}
                  onChange={(e) => handleColorChange(index, e.target.value)}
                >
                  <option value="#9966ff">Purple</option>
                  <option value="#0080ff">Blue</option>
                  <option value="#005500">Green</option>
                  <option value="#880808">Red</option>
                </select>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </DsaStyle>
  )
}
export default Dsa
