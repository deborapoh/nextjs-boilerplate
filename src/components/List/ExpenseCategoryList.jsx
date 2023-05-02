import {
  Box,
  IconButton,
  List as ListMui,
  ListItemButton as ListItemButtonMui,
  ListItemText,
  styled,
} from "@mui/material"
import { Edit, Archive } from '@mui/icons-material'
import classNames from "classnames"

import { useExpenseCategoryState, useSetExpenseCategoryState } from "@/state/expenseCategory"
import ListTitle from "../Title"
import { dialogs, useSetDialogState, useSetEditExpenseCategoryState } from "@/state/dialog"

// TODO: Add tooltips to icons
// TODO: Clear forms after submitting

const List = styled(ListMui)(() => ({
  overflowY: 'scroll',
  height: 265,
}))

const Container = styled(Box)(() => ({
  width: '50%',
}))

const ListItemButton = styled(ListItemButtonMui)(({ theme }) => ({
  width: '90%',
  backgroundColor: theme.palette.common.main,
  marginBottom: 5,
  borderRadius: 5,

  '&.archived': {
    backgroundColor: theme.palette.grey.main,
  }
}))

const ExpenseCategoryList = () => {
  const registeredExpenseCategories = useExpenseCategoryState()
  const setDialogState = useSetDialogState()
  const setEditExpenseCategoryState = useSetEditExpenseCategoryState()
  const setExpenseCategoryState = useSetExpenseCategoryState()
  const registeredCategories = useExpenseCategoryState()

  const handleEditButton = (e, expenseCategory) => {
    e.stopPropagation()

    const categoryId = registeredExpenseCategories.find((cat) =>
      cat.categoryName === expenseCategory.categoryName)

    setEditExpenseCategoryState({
      id: categoryId,
      ...expenseCategory
    })

    setDialogState(dialogs.expenseCategoryEdit)
  }

  const handleArchiveButton = (e, categoryName) => {
    e.stopPropagation()

    const category = registeredExpenseCategories.find((cat) =>
      cat.categoryName === categoryName)

    const registeredCategoryIndex = registeredExpenseCategories.findIndex(category => {
      return category.categoryName === categoryName
    })

    if (registeredCategoryIndex !== -1) {
      const newArray = [...registeredCategories]

      newArray[registeredCategoryIndex] = {
        ...category,
        archived: !category.archived,
      }

      setExpenseCategoryState(newArray)
    }
  }

  return (
    <Container>
      <ListTitle>Categorias Cadastradas</ListTitle>
      <List>
        {registeredExpenseCategories?.map((expenseCategory) => (
          <Box key={expenseCategory.id}>
            <ListItemButton className={classNames({ archived: expenseCategory.archived })} onClick={(e) => handleClick(e, expenseCategory.id)}>
              <ListItemText primary={expenseCategory.categoryName} />
              <IconButton onClick={(e) => handleEditButton(e, expenseCategory)}>
                <Edit />
              </IconButton>
              <IconButton onClick={(e) => handleArchiveButton(e, expenseCategory.categoryName)}>
                <Archive />
              </IconButton>
            </ListItemButton>
          </Box>
        ))}
      </List>
    </Container>
  )
}

export default ExpenseCategoryList
