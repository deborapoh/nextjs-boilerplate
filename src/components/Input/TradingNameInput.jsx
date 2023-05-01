import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const TradingNameInput = ({ errors, register }) => (
  <>
    <Input name="Nome Fantasia" register={register} />
    <InputValidation message={errors.nomefantasia?.type === 'required' && "Nome Fantasia é obrigatório"} />
  </>
)

export default TradingNameInput;
