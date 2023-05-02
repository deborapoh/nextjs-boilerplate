import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const InvoiceMonthInput = ({ errors, register, ...props }) => {
  return (
    <>
      <Input
        name='month'
        label='Mês de competência'
        type='number'
        register={register}
        {...props}
      />
      <InputValidation message={errors.month?.type === 'required' && "Mês é obrigatório"} />
    </>
  )
}

export default InvoiceMonthInput
