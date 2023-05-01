import { Menu as MenuIcon } from '@mui/icons-material'
import { styled } from "@mui/material"

const Icon = styled(MenuIcon)(({ theme }) => ({
  backgroundColor: '#4f2783',
  borderRadius: 5,
  cursor: 'pointer',
  height: 40,
  padding: 4,
  width: 40,
  '&:hover': {
    backgroundColor: '#8259b7',
  }
}));

const Menu = () => (
  <Icon />
)

export default Menu
