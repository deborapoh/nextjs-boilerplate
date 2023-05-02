import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useState } from 'react'

import { useCompanyState } from '@/state/companies'

const CompanySelect = ({ ...props }) => {
  const [company, setCompany] = useState('')
  const registeredCompanies = useCompanyState()

  const handleChange = (event) => {
    setCompany(event.target.value)
  }

  return (
    <Box mb={4} sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        <InputLabel id="select-label">Empresa</InputLabel>
        <Select
          {...props}
          id="companyId"
          name="companySelect"
          value={company}
          label="Empresa"
          onChange={handleChange}
        >
          {registeredCompanies?.map((company) => (
            <MenuItem key={company.id} value={company.id}>{company.tradingName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default CompanySelect
