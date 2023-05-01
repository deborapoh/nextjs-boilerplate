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

const Container = styled(Box)(({ theme }) => ({
  width: 200,
}));

const MenuOptions = ({ handleOpenPreferences }) => {
  const handleClickHistory = () => {
    console.log('handleClickHistory')
  }

  return (
    <>
      <Container>
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleOpenPreferences}>
              <ListItemText primary="Preferences" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton onClick={handleClickHistory}>
              <ListItemText primary="History" />
            </ListItemButton>
          </ListItem>
        </List>
      </Container>
    </>
  );
}

export default MenuOptions
