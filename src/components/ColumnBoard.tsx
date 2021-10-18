import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers/todo';
import { actionChangeStatus } from '../store/actions';
import { Todo } from '../types';

export const ColumnBoard = (props: { name: string; nextStage: string }) => {
  const { name } = props;
  const { nextStage } = props;
  const todo = useSelector((state: RootState) =>
    state.todo.filter((item: Todo) => item.status === name)
  );
  const dispatch = useDispatch();
  const changeStatus = (status: string, id: string): void => {
    dispatch(actionChangeStatus(status, Number(id)));
  };
  return (
    <Box>
      <Typography>{name}</Typography>
      <List
        dense
        sx={{
          bgcolor: 'background.paper',
          margin: '10px',
          overflow: 'auto',
          height: '300px',
          overflowX: 'hidden',
          padding: '10px'
        }}
      >
        {todo.map((value: Todo) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <ListItem
              key={value.id}
              disablePadding
              sx={{
                border: '1px solid black',
                margin: '5px'
              }}
            >
              <ListItemButton
                id={`${value.id}`}
                onClick={(e) => changeStatus(nextStage, e.currentTarget?.id)}
              >
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${value.id}`}
                    src={`/static/images/avatar/${value.id}.jpg`}
                  >
                    {`${value.userId}`}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${value.title}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
