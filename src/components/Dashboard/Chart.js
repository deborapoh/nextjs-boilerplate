import { Box, styled, Typography } from "@mui/material"
import BarChartIcon from '@mui/icons-material/BarChart'

const ChartContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  color: '#fff',
  display: 'flex',
  fontWeight: 'bold',
  fontSize: 18,
  justifyContent: 'center',
  backgroundColor: theme.palette.common.main,
  borderRadius: '50%',
  height: 100,
  marginBottom: 10,
  textAlign: 'center',
  padding: 4,
  width: 100,
}))

const Container = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: 100
}))

const Text = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.primary.main,
}))

const Chart = ({ children }) => (
  <Container>
    <ChartContainer>
      <BarChartIcon />
    </ChartContainer>
    <Text>{children}</Text>
  </Container>
)

export default Chart
