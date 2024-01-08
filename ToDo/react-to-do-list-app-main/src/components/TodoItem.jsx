import React from 'react'

function TodoItem({ task, deleteTask, toggleCompleted }) {

    function handleChange() {
        toggleCompleted(task.id);
        }
  return (
    <div className="todo-item">

    <p>{task.text}</p>
    <button className='cancel' onClick={() => deleteTask(task.id)}>X
    </button>
    </div>
  )
}

export default TodoItem