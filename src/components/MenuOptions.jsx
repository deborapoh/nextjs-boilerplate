import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled
} from '@mui/material'
import { useState } from 'react'
import PreferencesDialog from './Dialog/PreferencesDialog'

const Container = styled(Box)(() => ({
  width: 200,
}))

const MenuOptions = ({ handleOpenPreferences }) => {
  const handleClickHistory = () => {
  }

  return (
    <>
      <Container>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenPreferences}>
              <ListItemText primary="Preferências" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickHistory}>
              <ListItemText primary="Histórico de Lançamentos" />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </>
  )
}

export default MenuOptions
