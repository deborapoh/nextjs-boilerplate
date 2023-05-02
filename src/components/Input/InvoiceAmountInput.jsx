import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const InvoiceAmountInput = ({ errors, register, ...props }) => {
  return (
    <>
      <Input
        name='invoiceAmount'
        label='Valor da NF em R$'
        type='text'
        register={register}
        {...props}
      />
      <InputValidation message={errors.invoiceAmount?.type === 'required' && "Valor é obrigatório"} />
    </>
  )
}

export default InvoiceAmountInput
