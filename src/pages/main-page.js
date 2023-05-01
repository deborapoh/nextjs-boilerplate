import { Box, styled } from "@mui/material"
import { useState } from 'react'
import ActionButton from '@/components/Button/ActionButton'
import MenuIcon from "@/components/Icon/MenuIcon"
import Dashboard from "@/components/Dashboard"
import SignOutButton from "@/components/Button/SignOutButton";
import Popover from "@/components/Popover"

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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleSignOut = () => {
    window.open('/login', '_self')
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  };

  return (
    <Container>
      <HeaderContainer>
        <MenuIcon onClick={handleMenuOpen} />
        <Popover anchorEl={anchorEl} open={open} onClose={handleMenuClose} />
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
