import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material"
import { CloseIcon } from '@mui/icons-material'
import ActionButton from "../Button/ActionButton"

const ContentContainer = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 300,
  width: 500,
  justifyContent: 'space-around',
}));

const PreferencesDialog = ({ open, onClose }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Preferences
      </DialogTitle>
      <ContentContainer dividers>
        <ActionButton text="Companies" />
        <ActionButton text="Expense Categories" />
        <ActionButton text="Configurations" />
      </ContentContainer>
    </Dialog>
  )
}

export default PreferencesDialog
