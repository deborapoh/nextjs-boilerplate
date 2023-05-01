import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const CompanyNameInput = ({ errors, register }) => (
  <>
    <Input name="Razão Social" register={register} />
    <InputValidation message={errors.razaosocial?.type === 'required' && "Razão Social é obrigatório"} />
  </>
)

export default CompanyNameInput;
