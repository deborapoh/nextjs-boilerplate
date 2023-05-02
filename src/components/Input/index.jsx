import { TextField } from '@mui/material'

const Input = ({ register, ...props }) => {
  return (
    <TextField
      {...props}
      defaultValue=""
      {...register(props.name, { required: true })}
      variant="outlined"
    />
  )
}

export default Input
