import { Box, Typography, styled } from '@mui/material';

// TODO: improve this component

const Text = styled(Typography)(({ theme }) => ({
  color: '#4f2783',
  fontSize: 12,
  marginBottom: 12,
}));

const EmptyMessage = styled(Box)(({ theme }) => ({
  height: 30,
}));

const InputValidation = ({ message }) => (
  message ? <Text role="alert">{message}</Text> : <EmptyMessage />
);

export default InputValidation;
