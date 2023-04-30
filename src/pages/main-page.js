import { Typography, styled } from "@mui/material"

const LoggedInText = styled(Typography)(({ theme }) => ({
  color: '#4f2783',
  fontWeight: 'bold',
  fontSize: '24px',
}));

const MainPage = () => {
  return (
    <LoggedInText>
      Logged in
    </LoggedInText>
  )
}

export default MainPage
