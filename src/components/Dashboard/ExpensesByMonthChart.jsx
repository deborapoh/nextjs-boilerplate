import { Box, styled } from "@mui/material"

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  color: '#fff',
  display: 'flex',
  fontWeight: 'bold',
  fontSize: 18,
  justifyContent: 'center',
  backgroundColor: '#4f2783',
  borderRadius: 5,
  height: 100,
  marginBlock: 30,
  textAlign: 'center',
  padding: 4,
  width: 170,
}));

const ExpensesByMonthChart = () => (
  <Container>Despesas por Mês</Container>
)

export default ExpensesByMonthChart
