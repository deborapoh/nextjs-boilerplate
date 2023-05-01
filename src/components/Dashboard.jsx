import { Box, styled } from "@mui/material"

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  fontSize: 64,
  justifyContent: 'center',
  backgroundColor: '#cab6e2',
  border: '5px solid #fff',
  borderRadius: 5,
  height: 400,
  marginBlock: 30,
  padding: 4,
  width: 700,
}));

const Dashboard = () => (
  <Container>Dashboard</Container>
)

export default Dashboard
