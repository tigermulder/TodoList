import React,{ useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  // 할일 'add' 함수
  const addTodo = todo =>{
    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }
    const newTodos = [todo, ...todos]
    console.log(newTodos)
    setTodos(newTodos)
  }
  // 할일 'delete' 함수
  const removeTodo = id => {
    const removedArr = todos.filter(todo => todo.id !== id)
    setTodos(removedArr)
  }

  // 할일 '수정' 함수
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
  }

  // 할 일 "complete" 함수
  const completeTodo = id => {
    let updateTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    console.log('complete')
    setTodos(updateTodos)
  }

  return (
    <div className="todo-list">
      <h1>너의 오늘의 계획은 뭐야?</h1>
      <TodoForm onSubmit={addTodo}/>
      <Todo
        todos={todos} // 할 일 데이터
        removeTodo={removeTodo} // 제거함수
        updateTodo={updateTodo} // 수정함수
        completeTodo={completeTodo} // 완료함수를 props로 전달합니다.
      />
    </div>
  )
}

export default TodoList
