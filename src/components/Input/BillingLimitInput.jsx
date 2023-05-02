import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const BillingLimitInput = ({ errors, register }) => (
  <Container>
    <Input
      label='Limite máximo de Faturamento de MEI em R$'
      type='number'
      name="billingLimit"
      register={register}
    />
    <InputValidation message={errors.billingLimit?.type === 'required' && "Limite de faturamento inválido"} />
  </Container>
)

export default BillingLimitInput;
