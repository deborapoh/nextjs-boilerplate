import { Button as ButtonMui, styled } from "@mui/material"

import Button from "@/components/Button"

const ButtonStyled = styled(ButtonMui)(() => ({
  height: 56,
}))

const SubmitButton = ({ name, onClick = () => {} }) => (
  <ButtonStyled as={Button} onClick={onClick} type="submit" variant="contained">{name}</ButtonStyled>
)

export default SubmitButton
