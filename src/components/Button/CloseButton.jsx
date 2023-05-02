const { IconButton, styled } = require("@mui/material");

import { Close } from "@mui/icons-material";

const ButtonStyled = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}))

const CloseButton = ({ ...props }) => (
  <ButtonStyled {...props}>
    <Close />
  </ButtonStyled>
)

export default CloseButton
