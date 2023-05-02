import { Button, styled } from "@mui/material"

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 56,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const SubmitButton = ({ name, onClick = () => {} }) => (
  <ButtonStyled onClick={onClick} type="submit" variant="contained">{name}</ButtonStyled>
)

export default SubmitButton
