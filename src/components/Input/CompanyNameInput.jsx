import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const CompanyNameInput = ({ errors, register }) => (
  <>
    <Input name="Company Name" register={register} />
    <InputValidation message={errors.companyname?.type === 'required' && "Company name is required"} />
  </>
)

export default CompanyNameInput;
