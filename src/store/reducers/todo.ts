import { name } from '../../config';
import { Todo } from '../../types';

const initialState = {
  todos: []
};

export const todoReducer = (state = initialState, action: any) => {
  if (action.type === 'GET_ALL_TODO') {
    return { ...state, todos: action.value };
  }
  if (action.type === 'CHANGE_STATUS') {
    const index = state.todos.findIndex((item: Todo) => item.id === action.id);
    const todos: Todo[] = [...state.todos];
    if (todos[index].status === name.inProgress) {
      todos[index].status = name.done;
      return {
        todos
      };
    }
    if (todos[index].status === name.done) {
      todos[index].status = name.todo;
      return {
        todos
      };
    }
    todos[index].status = name.inProgress;
    return {
      todos
    };
  }
  return state;
};

export type RootState = ReturnType<typeof todoReducer>;
