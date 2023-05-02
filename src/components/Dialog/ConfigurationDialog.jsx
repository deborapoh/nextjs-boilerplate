import { Dialog, DialogContent, DialogTitle, styled } from "@mui/material"
import { useForm } from 'react-hook-form'

import SubmitButton from "../Button/SubmitButton"
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import BillingLimitInput from "../Input/BillingLimitInput"
import ControlledCheckbox from "../Input/Checkbox"
import BackButton from "../Button/BackButton"

const ContentContainer = styled(DialogContent)(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  width: 500,
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
}))

const ConfigurationDialog = () => {
  const open = useIsDialogOpen(dialogs.configurations)
  const setDialogState = useSetDialogState()

  const { formState: { errors }, handleSubmit, register, clearErrors, watch, setValue } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()
  }

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Configurações
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.preferences)}
        />
      </DialogTitle>
      <ContentContainer dividers>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BillingLimitInput errors={errors} register={register} />
        <ControlledCheckbox label='Habilitar alerta de faturamento por email' />
        <ControlledCheckbox label='Habilitar alerta de faturamento por sms' />
        <SubmitButton name="Salvar" onClick={() => clearErrors("")} />
      </Form>
      </ContentContainer>
    </Dialog>
  )
}

export default ConfigurationDialog
