import { Dialog as DialogMui, DialogContent as DialogContentMui, DialogTitle, IconButton, styled } from "@mui/material"
import SubmitButton from "../Button/SubmitButton"
import { useForm } from 'react-hook-form'
import CnpjInput from "../Input/CnpjInput"
import CompanyNameInput from "../Input/CompanyNameInput"
import TradingNameInput from "../Input/TradingNameInput"
import { useEffect, useMemo } from "react"
import { dialogs, useEditCompanyState, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { useSetCompanyState, useCompanyState } from "@/state/companies"
import { ArrowBack } from '@mui/icons-material'
import _ from 'lodash'

const Dialog = styled(DialogMui)(() => ({
  // display: 'flex',
}))

const DialogContent = styled(DialogContentMui)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: 500,
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}))

// TODO: isolate this css
const BackButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}))

const CompanyEditDialog = () => {
  const open = useIsDialogOpen(dialogs.companyEdit)
  const setDialogState = useSetDialogState()
  const setCompanyState = useSetCompanyState()
  const editCompanyState = useEditCompanyState()
  const registeredCompanies = useCompanyState()

  const defaultValues = useMemo(
    () => ({
      cnpj: editCompanyState?.cnpj || '',
      companyName: editCompanyState?.companyName || '',
      tradingName: editCompanyState?.tradingName || '',
    }),
    [editCompanyState],
  )

  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues,
    mode: 'onChange',
  })

  const cnpjValue = watch("cnpj")

  // TODO: isolate this code
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

    const registeredCompanyIndex = registeredCompanies.findIndex(comp => {
      return comp.id === editCompanyState.id
    })

    if (registeredCompanyIndex !== -1) {
      const duplicatedCompany = registeredCompanies.find((comp) => {
        return comp.cnpj !== editCompanyState?.cnpj && comp.cnpj === cnpj
      })

      if (duplicatedCompany) {
        alert('Duplicated company') // TODO: add error message
        return
      }

      const newArray = [...registeredCompanies]

      newArray[registeredCompanyIndex] = {
        id: registeredCompanies[registeredCompanyIndex].id,
        cnpj,
        companyName,
        tradingName,
      }

      setCompanyState(newArray)
      setDialogState(dialogs.company)
    }
  }

  // TODO: add a close icon button to all dialogs
  // TODO: add proptypes to all props

  useEffect(() => {
    if (!defaultValues.cnpj) {
      return
    }

    reset(defaultValues)
  }, [defaultValues, reset])

  if (_.isEmpty(editCompanyState)) {
    return
  }

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Editar Empresa
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.company)}
        >
          <ArrowBack />
        </BackButton>
      </DialogTitle>
      <DialogContent dividers>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CnpjInput errors={errors} register={register} />
          <CompanyNameInput errors={errors} register={register} />
          <TradingNameInput errors={errors} register={register} />
          <SubmitButton name="Salvar" onClick={() => clearErrors("")} />
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CompanyEditDialog
