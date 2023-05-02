import { Box, Typography, styled } from '@mui/material'

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 12,
  marginBottom: 12,
}))

const EmptyMessage = styled(Box)(() => ({
  height: 30,
}))

const InputValidation = ({ message }) => (
  message ? <Text role="alert">{message}</Text> : <EmptyMessage />
)

export default InputValidation
