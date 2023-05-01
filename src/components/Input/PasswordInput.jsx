import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const PasswordInput = ({ errors, register }) => (
  <>
    <Input name="Senha" register={register} type="password" />
    <InputValidation message={errors.senha?.type === 'required' && "Senha é obrigatório"} />
  </>
);

export default PasswordInput;
