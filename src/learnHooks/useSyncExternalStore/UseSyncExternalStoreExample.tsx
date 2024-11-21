import { useSyncExternalStore } from 'react';
import { todosStore } from './todosStore';

export default function TodosApp() {
  const todos: { id: number; text: string }[] = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
  return (
    <>
      <button onClick={() => todosStore.addTodo()}>Add todo</button>
      <hr />
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}
