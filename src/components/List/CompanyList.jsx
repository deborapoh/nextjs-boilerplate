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
import { useState } from "react"

import { useCompanyState } from "@/state/companies"
import ListTitle from "../Title"
import { dialogs, useSetDialogState, useSetEditCompanyState } from "@/state/dialog"

const List = styled(ListMui)(() => ({
  overflowY: 'scroll',
  maxHeight: 265,
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

const CompanyList = () => {
  const registeredCompanies = useCompanyState()
  const [itemIdOpened, setItemIdOpened] = useState('')
  const setDialogState = useSetDialogState()
  const setEditCompanyState = useSetEditCompanyState()

  const handleClick = (e, id) => {
    if (itemIdOpened === id) {
      setItemIdOpened('')
      return
    }

    setItemIdOpened(id)
  }

  const handleEditButton = (e, company) => {
    e.stopPropagation()

    const companyId = registeredCompanies.find((comp) => comp.cnpj === company.cnpj)

    setEditCompanyState({
      id: companyId,
      ...company
    })
    setDialogState(dialogs.companyEdit)
  }

  // TODO: isolate icon button
  // TODO: make responsive

  return (
    <Container>
      <ListTitle>Empresas Cadastradas</ListTitle>
      <List>
        {registeredCompanies?.map((company) => {
          const open = !!(itemIdOpened === company.id)
          return (
            <Box key={company.id}>
              <ListItemButton onClick={(e) => handleClick(e, company.id)}>
                <ListItemText primary={company.tradingName} />
                <IconButton onClick={(e) => handleEditButton(e, company)}>
                  <Edit />
                </IconButton>
                {open ? <IconButton><ExpandLess /></IconButton> : <IconButton><ExpandMore /></IconButton>}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemText primary={`CNPJ: ${company.cnpj || ''}`} />
                  <ListItemText primary={`Razão Social: ${company.companyName || ''}`} />
                </List>
              </Collapse>
            </Box>
          )
        })}
      </List>
    </Container>
  )
}

export default CompanyList
