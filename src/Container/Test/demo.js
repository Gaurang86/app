import React, { useState } from 'react'
const Test = () => {
  const [todoList, setTodoList] = useState({
    listOfArr: [],
    indexListValue: '',
    indexID: undefined,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const { indexListValue, indexID, listOfArr } = todoList
    console.log(todoList)
    if (!indexListValue?.trim()) return
    if (indexID === 0 || (indexID && indexID >= 0)) {
      listOfArr[indexID] = indexListValue
      setTodoList({
        ...todoList,
        listOfArr,
        indexListValue: '',
        indexID: undefined,
      })
    } else {
      setTodoList({
        ...todoList,
        listOfArr: [...listOfArr, indexListValue],
        indexListValue: '',
      })
    }
  }
  const handleEdit = (i) => {
    setTodoList({
      ...todoList,
      indexListValue: todoList.listOfArr[i],
      indexID: i,
    })
  }
  const handleDelete = (i) => {
    const { listOfArr, indexID } = todoList
    listOfArr.splice(i, 1)
    if (indexID === i) {
      setTodoList({
        ...todoList,
        listOfArr,
        indexID: undefined,
        indexListValue: '',
      })
    } else {
      setTodoList({
        ...todoList,
        listOfArr,
        indexID: indexID > i ? indexID - 1 : indexID,
      })
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={todoList.indexListValue}
          type="text"
          onChange={(e) =>
            setTodoList({ ...todoList, indexListValue: e.target.value })
          }
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <span>
          {todoList.listOfArr?.map((a, i) => (
            <p key={i}>
              {a}
              <button onClick={() => handleEdit(i)}>Edit</button>
              <button onClick={() => handleDelete(i)}>Delete</button>
            </p>
          ))}
        </span>
      </div>
    </div>
  )
}
export default Test
