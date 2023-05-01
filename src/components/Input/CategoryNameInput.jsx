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
    <Input name="Category Name" register={register} />
    <InputValidation message={errors.categoryname?.type === 'required' && "Category name is required"} />
  </Container>
)

export default CategoryNameInput;
