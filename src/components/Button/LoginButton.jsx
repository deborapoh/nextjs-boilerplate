import { Button, styled } from "@mui/material"

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#4f2783',
  height: 56,
  '&:hover': {
    backgroundColor: '#8259b7',
  }
}));

const LoginButton = ({ onClick }) => (
  <ButtonStyled onClick={onClick} type="submit" variant="contained">Sign in</ButtonStyled>
);

export default LoginButton;
