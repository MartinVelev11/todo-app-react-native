import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now().toString(), status: 'open' }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, ...updatedTodo } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getTodoById = (id) => {
    return todos.find(todo => todo.id === id);
  };

  const filterTodos = (status, timeFilter) => {
    let filtered = [...todos];
    
    if (status) {
      filtered = filtered.filter(todo => todo.status === status);
    }
    
    if (timeFilter) {
      const now = new Date();
      filtered = filtered.filter(todo => {
        const todoDate = new Date(todo.time);
        if (timeFilter === 'past') {
          return todoDate < now;
        } else if (timeFilter === 'future') {
          return todoDate > now;
        }
        return true;
      });
    }
    
    return filtered;
  };

  return (
    <TodoContext.Provider value={{
      todos,
      addTodo,
      updateTodo,
      deleteTodo,
      getTodoById,
      filterTodos
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}; 