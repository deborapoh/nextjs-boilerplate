import { Dialog, DialogContent as DialogContentMui, DialogTitle, styled } from "@mui/material"
import { useForm } from 'react-hook-form'
import { useEffect } from "react"
import { v4 } from 'uuid'

import SubmitButton from "../Button/SubmitButton"
import CnpjInput from "../Input/CnpjInput"
import CompanyNameInput from "../Input/CompanyNameInput"
import TradingNameInput from "../Input/TradingNameInput"
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { useSetCompanyState, useCompanyState } from "@/state/companies"
import CompanyList from "../List/CompanyList"
import BackButton from "../Button/BackButton"
import { normalizeCnpjNumber } from "@/utils/cnpj"

const DialogContent = styled(DialogContentMui)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
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

  useEffect(() => {
    setValue("cnpj", normalizeCnpjNumber(cnpjValue))
  },[cnpjValue])

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const { cnpj, companyName, tradingName } = data

    console.log('data', data)

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
        />
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
