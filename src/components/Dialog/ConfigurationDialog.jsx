import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material"
import SubmitButton from "../Button/SubmitButton"
import { useForm } from 'react-hook-form';
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog";
import BillingLimitInput from "../Input/BillingLimitInput";
import ControlledCheckbox from "../Input/Checkbox";
import { ArrowBack } from '@mui/icons-material'

const ContentContainer = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  width: 500,
}));

const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  width: '100%',
}));

const ConfigurationDialog = () => {
  const open = useIsDialogOpen(dialogs.configurations);
  const setDialogState = useSetDialogState()

  const { formState: { errors }, handleSubmit, register, clearErrors, watch, setValue } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data, e) => {
    e.preventDefault()
    console.log('data', data)
  };

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Configurations
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.preferences)}
        >
          <ArrowBack />
        </BackButton>
      </DialogTitle>
      <ContentContainer dividers>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BillingLimitInput errors={errors} register={register} />
        <ControlledCheckbox label='Habilitar alerta de faturamento por email' />
        <ControlledCheckbox label='Habilitar alerta de faturamento por sms' />
        <SubmitButton name="Save" onClick={() => clearErrors("")} />
      </Form>
      </ContentContainer>
    </Dialog>
  )
}

export default ConfigurationDialog
