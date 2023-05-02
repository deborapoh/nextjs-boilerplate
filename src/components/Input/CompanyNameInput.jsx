import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const CompanyNameInput = ({ errors, register }) => (
  <>
    <Input
      name='companyName'
      label='Razão Social'
      type='text'
      register={register}
    />
    <InputValidation message={errors.companyName?.type === 'required' && "Razão Social é obrigatório"} />
  </>
)

export default CompanyNameInput;
