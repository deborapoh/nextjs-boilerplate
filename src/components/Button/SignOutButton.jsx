import { Button, styled } from "@mui/material"

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#4f2783',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#8259b7',
  }
}));

const SignOutButton = ({ onClick, text }) => (
  <ButtonStyled onClick={onClick} type="button">{text}</ButtonStyled>
);

export default SignOutButton;
