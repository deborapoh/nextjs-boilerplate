import { TextField } from '@mui/material';
import InputValidation from '@/components/Warning/InputValidation';

const PasswordInput = ({ errors, register }) => (
  <>
    <TextField
      defaultValue=""
      label="Password"
      name="password"
      type="password"
      {...register("password", { required: true })}
      variant="outlined"
    />
    <InputValidation message={errors.password?.type === 'required' && "Password is required"} />
  </>
);

export default PasswordInput;
