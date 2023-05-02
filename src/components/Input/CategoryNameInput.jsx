import InputValidation from '@/components/Warning/InputValidation';
import Input from '@/components/Input'
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

const CategoryNameInput = ({ errors, register }) => (
  <Container>
    <Input
      name='categoryName'
      label='Nome'
      type='text'
      register={register}
    />
    <InputValidation message={errors.categoryName?.type === 'required' && "Nome da categoria é obrigatório"} />
  </Container>
)

export default CategoryNameInput;
