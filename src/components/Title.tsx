import { Typography } from '@mui/material';

export const Title = (props: { title: string }) => {
  const { title } = props;
  return (
    <Typography
      variant="h4"
      sx={{
        textAlign: 'start',
        margin: '10px'
      }}
    >
      {title}
    </Typography>
  );
};
