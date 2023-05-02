import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const UserInput = ({ errors, register }) => (
  <>
    <Input
      name="user"
      type='text'
      label='Usuário'
      register={register}
    />
    <InputValidation message={errors.user?.type === 'required' && "Usuário é obrigatório"} />
  </>
)

export default UserInput
