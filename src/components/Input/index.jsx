import { TextField } from '@mui/material';

const Input = ({ register, name, type='text', placeholder='' }) => (
  <TextField
    defaultValue=""
    label={name}
    placeholder={placeholder}
    name={name.toLowerCase().replaceAll(' ', '')}
    type={type}
    {...register(name.toLowerCase().replaceAll(' ', ''), { required: true })}
    variant="outlined"
  />
);

export default Input;
