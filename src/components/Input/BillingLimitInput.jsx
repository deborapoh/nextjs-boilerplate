import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

// TODO: change language to pt
// TODO: change main page color to a lighter purple

const BillingLimitInput = ({ errors, register }) => (
  <Container>
    <Input type='number' name="Billing Limit" register={register} />
    <InputValidation message={errors.billinglimit?.type === 'required' && "Invalid Billing limit"} />
  </Container>
)

export default BillingLimitInput;
