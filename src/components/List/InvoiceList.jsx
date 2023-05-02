import {
  Box,
  Collapse,
  IconButton,
  List as ListMui,
  ListItemButton as ListItemButtonMui,
  ListItemText,
  styled,
} from "@mui/material"
import { Edit, ExpandLess, ExpandMore } from '@mui/icons-material'
import { useCompanyState } from "@/state/companies"
import ListTitle from "../Title"
import { useState } from "react"
import { dialogs, useSetDialogState, useSetEditCompanyState } from "@/state/dialog"
import { useInvoiceState } from "@/state/invoices"
import { registeredCompanies } from "@/pages/main-page"

const List = styled(ListMui)(() => ({
  overflowY: 'scroll',
  maxHeight: 400,
}))

const Container = styled(Box)(() => ({
  width: '50%',
}))

const ListItemButton = styled(ListItemButtonMui)(({ theme }) => ({
  width: '90%',
  backgroundColor: theme.palette.common.main,
  marginBottom: 5,
  borderRadius: 5,
}))

const InvoiceList = () => {
  const registeredInvoices = useInvoiceState()
  const [itemIdOpened, setItemIdOpened] = useState('')
  const setDialogState = useSetDialogState()
  const setEditCompanyState = useSetEditCompanyState()
  const registeredCompanies = useCompanyState()

  const handleClick = (e, invoiceId) => {
    if (itemIdOpened === invoiceId) {
      setItemIdOpened('')
      return
    }

    setItemIdOpened(invoiceId)
  }

  const handleEditButton = (e, invoice) => {
    e.stopPropagation()

    setEditCompanyState(invoice)
    setDialogState(dialogs.invoiceEdit)
  }

  return (
    <Container>
      <ListTitle>Notas Fiscais Lançadas</ListTitle>
      <List>
        {registeredInvoices?.map((invoice) => {
          const open = !!(itemIdOpened === invoice.id)
          const company = registeredCompanies.find((comp) =>
            (comp.id === invoice.companyId))

          return (
            <Box key={invoice.id}>
              <ListItemButton onClick={(e) => handleClick(e, invoice.id)}>
                <ListItemText primary={invoice.invoiceAmount} />
                <IconButton onClick={(e) => handleEditButton(e, invoice)}>
                  <Edit />
                </IconButton>
                {open ? <IconButton><ExpandLess /></IconButton> : <IconButton><ExpandMore /></IconButton>}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemText primary={`Empresa: ${company.tradingName || ''}`} />
                  <ListItemText primary={`Valor R$: ${invoice.invoiceAmount || ''}`} />
                  <ListItemText primary={`Descrição do Serviço: ${invoice.serviceDescription || ''}`} />
                  <ListItemText primary={`Mês de competência: ${invoice.month || ''}`} />
                  <ListItemText primary={`Data de recebimento: ${invoice.date || ''}`} />
                </List>
              </Collapse>
            </Box>
          )
        })}
      </List>
    </Container>
  )
}

export default InvoiceList
