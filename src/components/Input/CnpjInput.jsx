import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const CnpjInput = ({ errors, register, ...props }) => {
  return (
    <>
      <Input
        name='cnpj'
        label='CNPJ'
        type='text'
        register={register}
        {...props}
      />
      <InputValidation message={errors.cnpj?.type === 'required' && "CNPJ é obrigatório"} />
    </>
  )
}

export default CnpjInput
