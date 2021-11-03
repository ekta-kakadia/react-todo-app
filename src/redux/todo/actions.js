  
  export const getTodo = (todo) => ({
    type: "GET_TODO",
    payload: { todo },
  });

  export const getTodoSuccess = (todo) => ({
    type: "GET_TODO_SUCCESS",
    payload: todo,
  });
  
  export const getTodoError = (message) => ({
    type: "GET_TODO_ERROR",
    payload: { message },
  });

  export const addTodo = (data) => ({
    type: "ADD_TODO",
    payload: data,
  });

  export const addTodoSuccess = (todo) => ({
    type: "ADD_TODO_SUCCESS",
    payload: todo,
  });
  
  export const addTodoError = (message) => ({
    type: "ADD_TODO_ERROR",
    payload: { message },
  });

  export const deleteTodo = (data) => ({
    type: "DELETE_TODO",
    payload: data,
  });

  export const deleteTodoSuccess = (todo) => ({
    type: "DELETE_TODO_SUCCESS",
    payload: todo,
  });
  
  export const deleteTodoError = (message) => ({
    type: "DELETE_TODO_ERROR",
    payload: { message },
  });

  export const editTodo = (data) => ({
    type: "EDIT_TODO",
    payload: data,
  });

  export const editTodoSuccess = (todo) => ({
    type: "EDIT_TODO_SUCCESS",
    payload: todo,
  });
  
  export const editTodoError = (message) => ({
    type: "EDIT_TODO_ERROR",
    payload: { message },
  });