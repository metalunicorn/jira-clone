import { useEffect } from 'react';
import { Box } from '@mui/system';
import { ColumnBoard } from '../components/ColumnBoard';
import { useTodoApi } from '../api/todosAPI';
import { Title } from '../components/Title';
import { TicketsList } from '../components/TicketsList';

export const Content = () => {
  const todoApi = useTodoApi();

  const fetchTodos = async () => {
    await todoApi.getAll();
  };

  useEffect(() => {
    async function fetchData() {
      return fetchTodos();
    }

    fetchData();
  }, []);

  return (
    <>
      <Title title="Tickets List" />

      <Box
        sx={{
          border: '1px solid black',
          margin: '10px',
          paddingBottom: '80px'
        }}
      >
        <TicketsList />
      </Box>
      <Title title=" Board" />
      <Box
        sx={{
          display: 'flex',
          border: '1px solid black',
          justifyContent: 'space-between',
          padding: '10px',
          margin: '10px'
        }}
      >
        <ColumnBoard name="TODO" nextStage="IN_PROGRESS" />
        <ColumnBoard name="IN_PROGRESS" nextStage="DONE" />
        <ColumnBoard name="DONE" nextStage="TODO" />
      </Box>
    </>
  );
};
