import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Creates a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#4f2783',
		},
		secondary: {
			main: '#8259b7',
		},
    common: {
			main: '#dabeff',
		},
    grey: {
      main: '#0000000a',
    },
		error: {
			main: red.A400,
		},
	},
})

export default theme
