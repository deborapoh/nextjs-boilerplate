import { Box, styled } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const Container = styled(Box)(({ theme }) => ({
  width: 200,
}));

const MenuOptions = () => {
  return (
    <Container>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Preferences" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="History" />
          </ListItemButton>
        </ListItem>
      </List>
    </Container>
  );
}

export default MenuOptions
