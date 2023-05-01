import Head from 'next/head'
import { Box, styled } from "@mui/material"
import { useForm } from 'react-hook-form';
import UserInput from "@/components/Input/UserInput"
import PasswordInput from "@/components/Input/PasswordInput"
import SubmitButton from "@/components/Button/SubmitButton";
import InputValidation from "@/components/Warning/InputValidation";
import mockData from "@/mock-data";
import Logo from '@/components/Icon/Logo';

const Container = styled(Box)(({ theme }) => ({
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
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  marginBlock: '64px 16px',
  width: 300,
}));

const Login = () => {
  const { formState: { errors }, handleSubmit, register, setError, clearErrors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const { user, password} = data
    const { user: { adminUser, adminPassword } } = mockData

    // TODO: implement login in the api with jwt validation
    if (user !== adminUser || password !== adminPassword) {
      setError("invalidCredentials")
      return
    }

    window.open('/main-page', '_self')
  };

  // TODO: implement:
  // better routing
  // send error messages to the component
  // props validation
  // use theme for colors and spacing
  // isolate styles
  // redirect index to login page
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
          <SubmitButton name="Sign in" onClick={() => clearErrors("")} />
          <InputValidation message={errors.invalidCredentials && "Invalid Credentials"} />
        </Form>
      </Container>
    </>
  )
}

export default Login
