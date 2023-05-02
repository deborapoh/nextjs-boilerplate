import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const InvoiceDateInput = ({ errors, register, ...props }) => {
  return (
    <>
      <Input
        name='date'
        label='Data de recebimento'
        type='text'
        register={register}
        {...props}
      />
      <InputValidation message={errors.date?.type === 'required' && "Data é obrigatório"} />
    </>
  )
}

export default InvoiceDateInput
