import { Typography, styled } from "@mui/material"

const Text = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  fontSize: '24px',
}))

const Logo = () => <Text>Gerenciamento de NF</Text>

export default Logo
