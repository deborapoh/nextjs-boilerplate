import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

// TODO: add validation for CNPJ

const CnpjInput = ({ errors, register }) => (
  <>
    <Input name="CNPJ" register={register} type="number" />
    <InputValidation message={errors.cnpj?.type === 'required' && "CNPJ is required"} />
  </>
)

export default CnpjInput;
