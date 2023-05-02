import { Box, styled } from "@mui/material"
import AccountingChart from "./AccountingChart"
import AvailableBillingChart from "./AvailableBillingChart"
import ExpensesByCategoryChart from "./ExpensesByCategoryChart"
import ExpensesByMonthChart from "./ExpensesByMonthChart"
import InvoiceByMonthChart from "./InvoiceByMonthChart"

const Container = styled(Box)(() => ({
  display: 'flex',
  fontSize: 64,
  height: 400,
  width: 700,
  justifyContent: 'space-around',
}))

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
