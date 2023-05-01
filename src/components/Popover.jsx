import MenuOptions from "./MenuOptions"
import { Popover as PopoverMui } from '@mui/material'

const Popover = ({ anchorEl, open, onClose }) => {
  return (
    <PopoverMui
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={open}
      onClose={onClose}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <MenuOptions />
    </PopoverMui>
  )
}

export default Popover
