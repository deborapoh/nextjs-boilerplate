import { Button, styled } from "@mui/material"

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#4f2783',
  color: '#fff',
  paddingBlock: 16,
  paddingInline: 32,
  '&:hover': {
    backgroundColor: '#8259b7',
  }
}));

const ActionButton = ({ onClick, text }) => (
  <ButtonStyled onClick={onClick} type="button">{text}</ButtonStyled>
);

export default ActionButton;
