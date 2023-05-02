import Head from 'next/head'
import { Box, styled } from "@mui/material"
import { useState } from 'react'

import ActionButton from '@/components/Button/ActionButton'
import MenuIcon from "@/components/Icon/MenuIcon"
import Dashboard from "@/components/Dashboard"
import SignOutButton from "@/components/Button/SignOutButton"
import Popover from "@/components/Popover"
import Dialog from "@/components/Dialog"
import { dialogs, useSetDialogState } from "@/state/dialog"
import Logo from "@/components/Icon/Logo"

export let registeredCompanies = []
export let registeredExpenseCategories = []

const HeaderContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.palette.common.main,
  display: 'flex',
  padding: 10,
  justifyContent: 'space-between',
  width: '100%',
}))

const FooterContainer = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  padding: 10,
  justifyContent: 'flex-end',
  width: '100%',
}))

const Container = styled(Box)(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  width: '100%',
  justifyContent: 'space-between',
}))

// TODO: sort alphabetically and adjust eslint
// TODO: isolate css

const MainPage = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const setDialogState = useSetDialogState()
  const open = Boolean(anchorEl)

  const handleSignOut = () => {
    window.open('/login', '_self')
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleOpenPreferences = () => {
    handleMenuClose()
    setDialogState(dialogs.preferences)
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  // TODO: fix the change icon color from menu

  return (
    <>
      <Head>
        <title>Página Inicial</title>
      </Head>
      <Dialog />
      <Container>
        <HeaderContainer>
          <Box alignItems='center' display='flex' width={300} justifyContent='space-between'>
            <MenuIcon sx={{ color: '#h1h1h1' }} onClick={handleMenuOpen} />
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
          <ActionButton onClick={() => setDialogState(dialogs.generateInvoice)} text="Lançar NF" />
          <Box ml={1}>
            <ActionButton text="Lançar Despesa" />
          </Box>
        </FooterContainer>
      </Container>
    </>
  )
}

export default MainPage
