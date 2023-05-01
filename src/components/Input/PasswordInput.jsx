import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const PasswordInput = ({ errors, register }) => (
  <>
    <Input name="Password" register={register} type="password" />
    <InputValidation message={errors.password?.type === 'required' && "Password is required"} />
  </>
);

export default PasswordInput;
