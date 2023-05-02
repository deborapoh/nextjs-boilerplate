import { Typography, styled } from "@mui/material"

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

const ListTitle = ({ children }) => <Text>{children}</Text>

export default ListTitle
