import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const UserInput = ({ errors, register }) => (
  <>
    <Input name="User" register={register} />
    <InputValidation message={errors.user?.type === 'required' && "Users is required"} />
  </>
)

export default UserInput;
