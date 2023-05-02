import { styled } from "@mui/material"

const Button = styled('div')(({ theme }) => ({
  display: 'flex',
  cursor: 'pointer',
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

export default Button
