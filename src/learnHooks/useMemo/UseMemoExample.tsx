import { useState } from 'react';
import { createTodos, todoStatus } from './Todos';
import TodoList from './TodoList';

const todos = createTodos();

export default function UseMemoExample() {
  const [tab, setTab] = useState<todoStatus>('all');
  const [isChecked, setIsChecked] = useState<boolean>(false);

  return (
    <>
      <button onClick={() => setTab('all')}>
        All
      </button>
      <button onClick={() => setTab('active')}>
        Active
      </button>
      <button onClick={() => setTab('completed')}>
        Completed
      </button>
      <br />
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
        />
        checked
      </label>
      <hr />
      <TodoList
        todos={todos}
        tab={tab}
      />
    </>
  );
}

