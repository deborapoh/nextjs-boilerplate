import { TextField } from '@mui/material';

const Input = ({ register, name, type="text" }) => (
  <TextField
    defaultValue=""
    label={name}
    name={name.toLowerCase().replaceAll(' ', '')}
    type={type}
    {...register(name.toLowerCase().replaceAll(' ', ''), { required: true })}
    variant="outlined"
  />
);

export default Input;
