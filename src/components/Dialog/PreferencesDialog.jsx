import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material"

import ActionButton from "../Button/ActionButton"
import CloseButton from "../Button/CloseButton"

const ContentContainer = styled(DialogContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: 300,
  width: 500,
  justifyContent: 'space-around',
}))

const PreferencesDialog = () => {
  const open = useIsDialogOpen(dialogs.preferences)
  const setDialogState = useSetDialogState()

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Preferências
        <CloseButton
          aria-label="close"
          onClick={() => setDialogState('')}
        />
      </DialogTitle>
      <ContentContainer dividers>
        <ActionButton onClick={() => setDialogState(dialogs.company)} text="Empresas Parceiras" />
        <ActionButton onClick={() => setDialogState(dialogs.expenseCategory)} text="Categorias de Despesa" />
        <ActionButton onClick={() => setDialogState(dialogs.configurations)} text="Configurações" />
      </ContentContainer>
    </Dialog>
  )
}

export default PreferencesDialog
