import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers/todo';
import { Todo } from '../types';

export const TicketsList = () => {
  const todos = useSelector((state: RootState) => state);

  return (
    <List
      dense
      sx={{
        bgcolor: 'background.paper',
        margin: '10px',
        overflow: 'scroll',
        height: '300px',
        overflowX: 'hidden',
        padding: '10px'
      }}
    >
      {todos.todo.map((value: Todo) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value.id}
            disablePadding
            sx={{
              border: '1px solid black',
              margin: '5px',
              width: '100%'
            }}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value.id}`}
                  src={`/static/images/avatar/${value.id}.jpg`}
                >
                  {value.userId}
                </Avatar>
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`${value.title}`} />
              <ListItemText
                primary={`${value.status}`}
                sx={{
                  textAlign: 'end'
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
