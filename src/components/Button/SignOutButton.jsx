import { Button, styled } from "@mui/material"

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const SignOutButton = ({ onClick, text }) => (
  <ButtonStyled onClick={onClick} type="button">{text}</ButtonStyled>
)

export default SignOutButton
