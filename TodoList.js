import React, { useState } from 'react';

function TodoList() {
  const [input, setInput] = useState('');
  const [todoList, setTodoList] = useState([]);
  /**
   * Todo structure:
   * {
   *  id: 0,
   *  text: 'Task 1',
   *  completed: true
   * }
   */
  const addTodoItem = () => {
    const item = {
      id: todoList.length+1,
      text: input,
      completed: true
    };

    setTodoList(prev => [...prev, item]);

    setInput('');
  }

  const toggleCompleted = (id) => {
    setTodoList(
      todoList.map(t => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed
          }
        } else {
          return t;
        }
      })
    )
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => addTodoItem()}>Add</button>

      <ul>
        {todoList.map(t => <li key={t.id}>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => toggleCompleted(t.id)}
          />
          <span className={t.completed && "strike-through"}> {t.text}</span>
          <button>Delete</button>
        </li>)}
      </ul>
    </div>
  );
}

export default function App() {
  return <TodoList />;
}
