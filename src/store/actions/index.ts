import { Todo } from '../../types';

export const actionGetAllTodos = (todo: Todo[]) => ({
  type: 'GET_ALL_TODO',
  value: todo
});

export const actionChangeStatus = (status: string, id: number) => ({
  type: 'CHANGE_STATUS',
  status,
  id
});
