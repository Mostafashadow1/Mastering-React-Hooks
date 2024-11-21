// This is an example of a third-party store
// that you might need to integrate with React.

// If your app is fully built with React,
// we recommend using React state instead.

type listener = () => void
let nextId = 0;
let todos = [{ id: nextId++, text: 'Todo #1' }];
let listeners : listener[]  = [];

export const todosStore = {
  addTodo() {
    todos = [...todos, { id: nextId++, text: 'Todo #' + nextId }]
    emitChange();
  },
  subscribe(listener: () => void): () => void {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot() {
    return todos;
  }
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}
