import { Box, styled } from '@mui/material'

import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}))

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

export default CategoryNameInput
