import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const UserInput = ({ errors, register }) => (
  <>
    <Input name="Usuário" register={register} />
    <InputValidation message={errors.usuario?.type === 'required' && "Usuário é obrigatório"} />
  </>
)

export default UserInput;
