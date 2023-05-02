import { Menu } from '@mui/icons-material'
import { styled } from "@mui/material"

const Icon = styled(Menu)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: 5,
  cursor: 'pointer',
  height: 40,
  padding: 4,
  width: 40,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  }
}))

const MenuIcon = ({ onClick }) => (
  <Icon onClick={onClick} />
)

export default MenuIcon
