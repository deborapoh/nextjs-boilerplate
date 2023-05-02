import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const TradingNameInput = ({ errors, register }) => (
  <>
    <Input
      name='tradingName'
      type='text'
      label='Nome Fantasia'
      register={register}
    />
    <InputValidation message={errors.tradingName?.type === 'required' && "Nome Fantasia é obrigatório"} />
  </>
)

export default TradingNameInput
