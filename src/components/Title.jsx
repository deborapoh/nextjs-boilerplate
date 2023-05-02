const { Typography, styled } = require("@mui/material");

const Text = styled(Typography)(({ theme }) => ({
  color: "#4f2783",
}))

const ListTitle = ({ children }) => <Text>{children}</Text>

export default ListTitle
