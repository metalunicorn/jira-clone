import axios from 'axios';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { actionGetAllTodos } from '../store/actions';

export const useTodoApi = () => {
  const dispatch = useDispatch();

  const getAll = useCallback(
    () =>
      axios.get(String(process.env.REACT_APP_URL)).then((res: any) => {
        dispatch(
          actionGetAllTodos(
            res.data.map(
              (todo: { userId: number; id: number; title: string }) => ({
                userId: todo.userId,
                id: todo.id,
                title: todo.title,
                status: 'TODO'
              })
            )
          )
        );
        return res;
      }),
    [dispatch]
  );

  return {
    getAll
  };
};
