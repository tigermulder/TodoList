import React, { useState } from 'react'

const TodoForm = props => { // props 안에는 객체안에 key값으로 onSubmit 함수가 key 값으로 들어가 있습니다.
  const [input, setInput] = useState('') // input에 입력한 값을 저장하기 위해서 useState를 이용해서 input 변수를 생성합니다.

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({ // 👈 부모 컴포넌트에서 받아온 함수를 실행합니다. 그러면 인자 값이 부모 컴포넌트로 넘어갑니다. 즉, id, text 값이 넘어갑니다.
      id: Math.floor(Math.random() * 10000),
      text: input,
    })

    setInput('') // input 값을 초기화 합니다. <input value={input}/> 태그안의 text를 사라지게 만듭니다.
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? ( // 👈 props로 받아온 값에서 Key값으로 edit이 true이면 아래의 태그가 랜더링됩니다.
        <>
          <input
            type="text"
            placeholder="Update your item"
            name="text"
            className="todo-input edit"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button edit">update</button>
        </>
      ) : ( // props.edit이 false이면 아래의 태그가 랜더링됩니다.
        <>
          <input
            type="text"
            placeholder="Add a todo"
            name="text"
            className="todo-input"
            value={input}
            onChange={handleChange}
          ></input>
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  )
}

export default TodoForm