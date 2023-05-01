import Head from 'next/head'
import { Box, styled } from "@mui/material"
import { useState } from 'react'
import ActionButton from '@/components/Button/ActionButton'
import MenuIcon from "@/components/Icon/MenuIcon"
import Dashboard from "@/components/Dashboard"
import SignOutButton from "@/components/Button/SignOutButton";
import Popover from "@/components/Popover"
import Dialog from "@/components/Dialog"
import { dialogs, useSetDialogState } from "@/state/dialog"
import Logo from "@/components/Icon/Logo"

const HeaderContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: '#dabeff',
  display: 'flex',
  padding: 10,
  justifyContent: 'space-between',
  width: '100%',
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  padding: 10,
  justifyContent: 'flex-end',
  width: '100%',
}));

const Container = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  justifyContent: 'space-between',
}));

// TODO: sort alphabetically and adjust eslint
// TODO: isolate css

const MainPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const setDialogState = useSetDialogState()
  const open = Boolean(anchorEl);

  const handleSignOut = () => {
    window.open('/login', '_self')
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  };

  const handleOpenPreferences = () => {
    handleMenuClose()
    setDialogState(dialogs.preferences)

    // setOpenPreferences(true)
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  };

  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <Dialog />
      <Container>
        <HeaderContainer>
          <Box alignItems='center' display='flex' width={300} justifyContent='space-between'>
            <MenuIcon onClick={handleMenuOpen} />
            <Popover
              handleOpenPreferences={handleOpenPreferences}
              handleMenuClose={handleMenuClose}
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
            />
            <Logo />
          </Box>
          <SignOutButton onClick={handleSignOut} text="Sair" />
        </HeaderContainer>
        <Dashboard />
        <FooterContainer>
          <ActionButton text="Lançar NF" />
          <Box ml={1}>
            <ActionButton text="Lançar Despesa" />
          </Box>
        </FooterContainer>
      </Container>
    </>
  )
}

export default MainPage
