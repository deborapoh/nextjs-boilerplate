import { Button as ButtonMui, styled } from "@mui/material"

import Button from "@/components/Button"

const ButtonStyled = styled(ButtonMui)(() => ({
  paddingBlock: 8,
  paddingInline: 15,
}))

const SignOutButton = ({ onClick, text }) => (
  <ButtonStyled as={Button} onClick={onClick} type="button">{text}</ButtonStyled>
)

export default SignOutButton
