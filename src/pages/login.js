import Head from 'next/head'
import { Box, Typography, styled } from "@mui/material"
import { useForm } from 'react-hook-form';
import UserInput from "@/components/Input/UserInput"
import PasswordInput from "@/components/Input/PasswordInput"
import LoginButton from "@/components/Button/LoginButton";
import InputValidation from "@/components/Warning/InputValidation";
import mockData from "@/mock-data";

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

const Logo = styled(Typography)(({ theme }) => ({
  color: '#4f2783',
  fontWeight: 'bold',
  fontSize: '24px',
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
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Container>
        <Logo>Invoice Management</Logo>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <UserInput errors={errors} register={register} />
          <PasswordInput errors={errors} register={register} />
          <LoginButton onClick={() => clearErrors("")} />
          <InputValidation message={errors.invalidCredentials && "Invalid Credentials"} />
        </Form>
      </Container>
    </>
  )
}

export default Login
