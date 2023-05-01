import { Box, styled } from "@mui/material"
import ActionButton from '@/components/Button/ActionButton'
import Menu from "@/components/Icon/Menu"
import Dashboard from "@/components/Dashboard"
import SignOutButton from "@/components/Button/SignOutButton";

const HeaderContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: '#4f2783',
  display: 'flex',
  padding: 10,
  justifyContent: 'space-between',
  width: '100%',
}));

const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: 700,
  justifyContent: 'space-evenly',
}));

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const MainPage = () => {
  const handleSignOut = () => {
    window.open('/login', '_self')
  }

  return (
    <Container>
      <HeaderContainer>
        <Menu />
        <SignOutButton onClick={handleSignOut} text="Sign Out" />
      </HeaderContainer>
      <Dashboard />
      <ButtonContainer>
        <ActionButton text="Generate Invoice" />
        <ActionButton text="Generate Expense" />
      </ButtonContainer>
    </Container>
  )
}

export default MainPage
