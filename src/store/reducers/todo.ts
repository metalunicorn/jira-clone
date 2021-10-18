import { Todo } from '../../types';

const initialState = {
  todo: []
};

export const todoReducer = (state = initialState, action: any) => {
  if (action.type === 'GET_ALL_TODO') {
    return { ...state, todo: action.value };
  }
  if (action.type === 'CHANGE_STATUS') {
    const index = state.todo.findIndex((item: Todo) => item.id === action.id);
    const todo: Todo[] = [...state.todo];
    todo[index].status = action.status;
    return {
      todo
    };
  }
  return state;
};

export type RootState = ReturnType<typeof todoReducer>;
