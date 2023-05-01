import { Box, styled } from "@mui/material"
import AccountingChart from "./AccountingChart";
import AvailableBillingChart from "./AvailableBillingChart";
import ExpensesByCategoryChart from "./ExpensesByCategoryChart";
import ExpensesByMonthChart from "./ExpensesByMonthChart";
import InvoiceByMonthChart from "./InvoiceByMonthChart";

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  fontSize: 64,
  backgroundColor: '#fff',
  borderRadius: 5,
  height: 400,
  marginBlock: 30,
  padding: 36,
  width: 700,
  display: 'inline-flex',
  flexWrap: 'wrap',

  '> div': {
    margin: 6,
  }
}));

const Dashboard = () => (
  <Container>
    <AccountingChart />
    <AvailableBillingChart />
    <ExpensesByCategoryChart />
    <ExpensesByMonthChart />
    <InvoiceByMonthChart />
  </Container>
)

export default Dashboard
