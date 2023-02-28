import React, { useState } from 'react'
const Test = () => {
  const [todoList, setTodoList] = useState({
    listOfArr: [],
    indexListValue: '',
    indexID: 0,
  })
  const handleSubmit = (e) => {
    debugger
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
        indexListValue: '',
      })
    }
    setTodoList({
      ...todoList,
      listOfArr,
      indexID: indexID - 1,
    })
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
          {todoList.listOfArr?.map((ArrList, index) => (
            <p key={index}>
              {ArrList}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </p>
          ))}
        </span>
      </div>
    </div>
  )
}
export default Test
