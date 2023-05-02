const { IconButton, styled } = require("@mui/material");

import { ArrowBack } from "@mui/icons-material";

const ButtonStyled = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}))

const BackButton = ({ ...props }) => (
  <ButtonStyled {...props}>
    <ArrowBack />
  </ButtonStyled>
)

export default BackButton
