import { Typography, styled } from "@mui/material";

const Text = styled(Typography)(({ theme }) => ({
  color: '#4f2783',
  fontWeight: 'bold',
  fontSize: '24px',
}));

const Logo = () => <Text>Gerenciamento de NF</Text>

export default Logo
