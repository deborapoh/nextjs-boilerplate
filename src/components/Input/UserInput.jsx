import { TextField } from '@mui/material';
import InputValidation from '@/components/Warning/InputValidation';

const UserInput = ({ errors, register }) => (
  <>
    <TextField
      defaultValue=""
      label="User"
      name="user"
      type="user"
      {...register("user", { required: true })}
      variant="outlined"
    />
    <InputValidation message={errors.user?.type === 'required' && "Users is required"} />
  </>
)

export default UserInput;
