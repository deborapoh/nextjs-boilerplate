import { Dialog as DialogMui, DialogContent as DialogContentMui, DialogTitle, IconButton, styled, Typography } from "@mui/material"
import SubmitButton from "../Button/SubmitButton"
import { useForm } from 'react-hook-form'
import CnpjInput from "../Input/CnpjInput"
import CompanyNameInput from "../Input/CompanyNameInput"
import TradingNameInput from "../Input/TradingNameInput"
import { useEffect } from "react"
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { useSetCompanyState, useCompanyState } from "@/state/companies"
import { ArrowBack, Delete, Edit } from '@mui/icons-material'
import { v4 } from 'uuid'
import CompanyList from "../List/CompanyList"

const Dialog = styled(DialogMui)(() => ({
  // display: 'flex',
}))

const DialogContent = styled(DialogContentMui)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
}))

// TODO: isolate this css
const BackButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}))

const CompanyDialog = () => {
  const open = useIsDialogOpen(dialogs.company)
  const setDialogState = useSetDialogState()
  const setCompanyState = useSetCompanyState()
  const registeredCompanies = useCompanyState()

  const defaultValues = {
    cnpj: '',
    companyName: '',
    tradingName: '',
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    watch,
    setValue,
    isSubmitSuccessful,
  } = useForm({
    mode: 'onChange',
    defaultValues
  })

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

    const { cnpj, companyName, tradingName } = data

    const newCompany = {
      id: v4(),
      cnpj,
      companyName,
      tradingName
    }

    const duplicatedCompany = registeredCompanies.find((comp) => comp.cnpj === newCompany.cnpj)

    if (duplicatedCompany) {
      alert('Duplicated company')
      return
    }

    setCompanyState([...registeredCompanies, newCompany])
  }

  // TODO: add a close icon button to all dialogs
  // TODO: add proptypes to all props

  useEffect(() => {
    if (!isSubmitSuccessful) {
      return
    }

    reset(defaultValues)
  }, [isSubmitSuccessful])

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Empresas Parceiras
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.preferences)}
        >
          <ArrowBack />
        </BackButton>
      </DialogTitle>
      <DialogContent dividers>
        <CompanyList />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CnpjInput errors={errors} register={register} />
          <CompanyNameInput errors={errors} register={register} />
          <TradingNameInput errors={errors} register={register} />
          <SubmitButton name="Cadastrar" onClick={() => clearErrors("")} />
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyDialog
