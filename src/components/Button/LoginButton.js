import { Button as ButtonMui, styled } from "@mui/material"

const Button = styled(ButtonMui)(({ theme }) => ({
  backgroundColor: '#4f2783',
  height: 56,
}));

const LoginButton = ({ onClick }) => (
  <Button onClick={onClick} type="submit" variant="contained">Sign in</Button>
);

export default LoginButton;
