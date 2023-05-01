import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const CnpjInput = ({ errors, register }) => {
  return (
    <>
      <Input name="CNPJ" register={register} />
      <InputValidation message={errors.cnpj?.type === 'required' && "CNPJ é obrigatório"} />
    </>
  )
}

export default CnpjInput;
