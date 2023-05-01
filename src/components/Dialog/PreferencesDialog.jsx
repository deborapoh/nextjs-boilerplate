import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog";
import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material"
import { Close as CloseIcon } from '@mui/icons-material'
import ActionButton from "../Button/ActionButton"

const ContentContainer = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 300,
  width: 500,
  justifyContent: 'space-around',
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));

const PreferencesDialog = () => {
  const open = useIsDialogOpen(dialogs.preferences)
  const setDialogState = useSetDialogState()

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Preferences
        <CloseButton
          aria-label="close"
          onClick={() => setDialogState('')}
        >
          <CloseIcon />
        </CloseButton>
      </DialogTitle>
      <ContentContainer dividers>
        <ActionButton onClick={() => setDialogState(dialogs.company)} text="Companies" />
        <ActionButton onClick={() => setDialogState(dialogs.expenseCategory)} text="Expense Categories" />
        <ActionButton onClick={() => setDialogState(dialogs.configurations)} text="Configurations" />
      </ContentContainer>
    </Dialog>
  )
}

export default PreferencesDialog
