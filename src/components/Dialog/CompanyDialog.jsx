import { Dialog, DialogContent, DialogTitle, IconButton, styled } from "@mui/material"
import SubmitButton from "../Button/SubmitButton"
import { useForm } from 'react-hook-form';
import CnpjInput from "../Input/CnpjInput";
import CompanyNameInput from "../Input/CompanyNameInput";
import TradingNameInput from "../Input/TradingNameInput";
import { useEffect } from "react"
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog";
import { ArrowBack } from '@mui/icons-material'

const ContentContainer = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  width: 500,
  justifyContent: 'space-around',
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '100%',
}));

// TODO: isolate this css
const BackButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}));

const CompanyDialog = () => {
  const open = useIsDialogOpen(dialogs.company);
  const setDialogState = useSetDialogState()

  const { formState: { errors }, handleSubmit, register, clearErrors, watch, setValue } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const cnpjValue = watch("cnpj")

  const normalizeCnpjNumber = (value) => {
    if (!value) return ''

    return value.replace(/[\D]/g, '')
      .replace(/(\d{2})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1')
  }

  useEffect(() => {
    setValue("cnpj", normalizeCnpjNumber(cnpjValue))
  },[cnpjValue])

  const onSubmit = async (data, e) => {
    e.preventDefault()
    console.log('data', data)
  };

  // TODO: add a close icon button to all dialogs

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Cadastro de Empresas
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.preferences)}
        >
          <ArrowBack />
        </BackButton>
      </DialogTitle>
      <ContentContainer dividers>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CnpjInput errors={errors} register={register} />
        <CompanyNameInput errors={errors} register={register} />
        <TradingNameInput errors={errors} register={register} />
        <SubmitButton name="Cadastrar" onClick={() => clearErrors("")} />
      </Form>
      </ContentContainer>
    </Dialog>
  )
}

export default CompanyDialog
