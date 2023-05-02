import InputValidation from '@/components/Warning/InputValidation'
import Input from '@/components/Input'

const ServiceDescriptionInput = ({ errors, register, ...props }) => {
  return (
    <>
      <Input
        name='serviceDescription'
        label='Descrição do Serviço'
        type='text'
        register={register}
        {...props}
      />
      <InputValidation message={errors.serviceDescription?.type === 'required' && "Descrição é obrigatório"} />
    </>
  )
}

export default ServiceDescriptionInput
