import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { actionChangeStatus } from '../store/actions';
import { RootState } from '../store/reducers/todo';
import { Todo } from '../types';

export const TicketsList = () => {
  const dataState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  dataState.todos.sort((a: Todo, b: Todo) => {
    if (a.status > b.status) {
      return -1;
    }
    if (a.status < b.status) {
      return 1;
    }
    return 0;
  });
  const changeStatus = (id: string): void => {
    dispatch(actionChangeStatus(Number(id)));
  };
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
      {dataState.todos.map((value: Todo) => {
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
            <ListItemButton
              id={`${value.id}`}
              onClick={(e) => changeStatus(e.currentTarget?.id)}
            >
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
