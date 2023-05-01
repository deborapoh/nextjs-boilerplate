import { Dialog, DialogContent, DialogTitle, styled } from "@mui/material"
import SubmitButton from "../Button/SubmitButton"
import { useForm } from 'react-hook-form';
import CnpjInput from "../Input/CnpjInput";
import CompanyNameInput from "../Input/CompanyNameInput";
import TradingNameInput from "../Input/TradingNameInput";

const ContentContainer = styled(DialogContent)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: 400,
  width: 500,
  justifyContent: 'space-around',
}));

const Form = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  width: '100%',
}));

const CompanyDialog = ({ open, onClose }) => {
  const { formState: { errors }, handleSubmit, register, setError, clearErrors } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data, e) => {
    e.preventDefault()

    // const { cnpj, companyname, tradingname } = data
    console.log('data', data)
    // console.log('companyName', companyName)
    // console.log('tradingName', tradingName)
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Register a new company
      </DialogTitle>
      <ContentContainer dividers>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <CnpjInput errors={errors} register={register} />
        <CompanyNameInput errors={errors} register={register} />
        <TradingNameInput errors={errors} register={register} />
        <SubmitButton name="Register" onClick={() => clearErrors("")} />
      </Form>
      </ContentContainer>
    </Dialog>
  )
}

export default CompanyDialog
