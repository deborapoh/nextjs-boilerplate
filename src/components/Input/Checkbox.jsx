import { Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';

const ControlledCheckbox = ({ label = 'Label' }) => {
  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label={label}
    />
  );
}

export default ControlledCheckbox
