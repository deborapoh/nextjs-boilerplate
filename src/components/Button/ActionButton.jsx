import { Button as ButtonMui, styled } from "@mui/material"

import Button from "@/components/Button"

const ButtonStyled = styled(ButtonMui)(() => ({
  paddingBlock: 16,
  paddingInline: 32,
}))

const ActionButton = ({ onClick, text }) => (
  <ButtonStyled as={Button} onClick={onClick} type="button">{text}</ButtonStyled>
)

export default ActionButton
