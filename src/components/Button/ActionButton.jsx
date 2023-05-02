import { Button, styled } from "@mui/material"

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  paddingBlock: 16,
  paddingInline: 32,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const ActionButton = ({ onClick, text }) => (
  <ButtonStyled onClick={onClick} type="button">{text}</ButtonStyled>
)

export default ActionButton
