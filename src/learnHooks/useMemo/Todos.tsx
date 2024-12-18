export function createTodos() {
    const todos = [];
    for (let i = 0; i < 50; i++) {
      todos.push({
        id: i,
        text: "Todo " + (i + 1),
        completed: Math.random() > 0.5
      });
    }
    return todos;
}
  

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type todoStatus = "all" | "active" | "completed";

export function filterTodos(todos: Todo[], tab:todoStatus) {
console.log('[ARTIFICIALLY SLOW] Filtering ' + todos.length + ' todos for "' + tab + '" tab.');
let startTime = performance.now();
while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
}

return todos.filter(todo => {
    if (tab === 'all') {
    return true;
    } else if (tab === 'active') {
    return !todo.completed;
    } else if (tab === 'completed') {
    return todo.completed;
    }
});
}
  