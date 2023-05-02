import Head from 'next/head'
import { Box, styled } from "@mui/material"
import { useForm } from 'react-hook-form'
import UserInput from "@/components/Input/UserInput"
import PasswordInput from "@/components/Input/PasswordInput"
import SubmitButton from "@/components/Button/SubmitButton"
import InputValidation from "@/components/Warning/InputValidation"
import Logo from '@/components/Icon/Logo'
import { useUserState } from '@/state/user'

const Container = styled(Box)(() => ({
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 8,
  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  display: 'flex',
  flexDirection: 'column',
  height: 450,
  justifyContent: 'center',
  margin: 24,
  marginTop: 100,
  padding: 32,
  width: 350,
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginBlock: '64px 16px',
  width: 300,
}))

const Login = () => {
  const registeredUser = useUserState()

  const { formState: { errors }, handleSubmit, register, setError, clearErrors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const { user, password} = data
    const { adminUser, adminPassword } = registeredUser

    // TODO: implement login in the api with jwt validation
    if (user !== adminUser || password !== adminPassword) {
      setError("invalidCredentials")
      return
    }

    window.open('/main-page', '_self')
  }

  // TODO: send error messages to the component
  // TODO: props validation
  // TODO: isolate styles
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Logo />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <UserInput errors={errors} register={register} />
          <PasswordInput errors={errors} register={register} />
          <SubmitButton name="Entrar" onClick={() => clearErrors("")} />
          <InputValidation message={errors.invalidCredentials && "Credenciais Inválidas"} />
        </Form>
      </Container>
    </>
  )
}

export default Login
