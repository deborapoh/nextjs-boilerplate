import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const PasswordInput = ({ errors, register }) => (
  <>
    <Input
      name='password'
      label='Senha'
      register={register}
      type="password"
    />
    <InputValidation message={errors.password?.type === 'required' && "Senha é obrigatório"} />
  </>
)

export default PasswordInput
