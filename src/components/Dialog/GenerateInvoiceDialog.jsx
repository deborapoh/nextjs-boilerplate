import { Dialog, DialogContent as DialogContentMui, DialogTitle, IconButton, styled } from "@mui/material"
import { useForm } from 'react-hook-form'
import { useEffect } from "react"

import SubmitButton from "../Button/SubmitButton"
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { v4 } from 'uuid'
import { useInvoiceState, useSetInvoiceState } from "@/state/invoices"
import InvoiceList from "../List/InvoiceList"
import InvoiceAmountInput from "../Input/InvoiceAmountInput"
import ServiceDescriptionInput from "../Input/ServiceDescriptionInput"
import InvoiceMonthInput from "../Input/InvoiceMonthInput"
import InvoiceDateInput from "../Input/InvoiceDateInput"
import CloseButton from "../Button/CloseButton"

const DialogContent = styled(DialogContentMui)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
}))

const GenerateInvoiceDialog = () => {
  const open = useIsDialogOpen(dialogs.generateInvoice)
  const setDialogState = useSetDialogState()
  const setInvoiceState = useSetInvoiceState()
  const registeredInvoices = useInvoiceState()

  const defaultValues = {
    companyId: '',
    invoiceAmount: '',
    serviceDescription: '',
    month: '',
    date: '',
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    isSubmitSuccessful,
  } = useForm({
    mode: 'onChange',
    defaultValues: {}
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const {
      companyId,
      invoiceAmount,
      serviceDescription,
      month,
      date,
    } = data

    const newInvoice = {
      id: v4(),
      companyId,
      invoiceAmount,
      serviceDescription,
      month,
      date,
    }

    setInvoiceState([...registeredInvoices, newInvoice])
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
        Lançamento de Nota Fiscal
        <CloseButton
          aria-label="close"
          onClick={() => setDialogState('')}
        />
      </DialogTitle>
      <DialogContent dividers>
        <InvoiceList />
        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* <CompanySelect /> */}
          <InvoiceAmountInput errors={errors} register={register} />
          <ServiceDescriptionInput errors={errors} register={register} />
          <InvoiceMonthInput errors={errors} register={register} />
          <InvoiceDateInput errors={errors} register={register} />
          <SubmitButton name="Lançar" onClick={() => clearErrors("")} />
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default GenerateInvoiceDialog
