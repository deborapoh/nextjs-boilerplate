import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'

const TradingNameInput = ({ errors, register }) => (
  <>
    <Input name="Trading Name" register={register} />
    <InputValidation message={errors.tradingname?.type === 'required' && "Trading name is required"} />
  </>
)

export default TradingNameInput;
