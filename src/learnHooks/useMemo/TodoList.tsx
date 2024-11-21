import { useMemo } from 'react';
import { Todo } from './Todos.js';
import { filterTodos } from './Todos.js'


interface TodoListProps {
  todos: Todo[];
  tab: 'all' | 'active' | 'completed';
}

export default function TodoList({ todos, tab }: TodoListProps) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos , tab]
  );
  return (
      <ul>
        {visibleTodos.map((todo : Todo) => (
          <li key={todo.id}>
            {todo.completed ?
              <s>{todo.text}</s> :
              todo.text
            }
          </li>
        ))}
      </ul>
  );
}
