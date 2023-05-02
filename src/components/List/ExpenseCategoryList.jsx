import {
  Box,
  Collapse,
  IconButton,
  List as ListMui,
  ListItemButton as ListItemButtonMui,
  ListItemText,
  styled,
} from "@mui/material"
import { Edit, Archive } from '@mui/icons-material'
import { useExpenseCategoryState, useSetExpenseCategoryState } from "@/state/expenseCategory"
import ListTitle from "../Title"
import { dialogs, useSetDialogState, useSetEditExpenseCategoryState } from "@/state/dialog"
import classNames from "classnames"

// TODO: Add tooltips to icons
// TODO: Clear forms after submitting

const List = styled(ListMui)(({ theme }) => ({
  overflowY: 'scroll',
  height: 265,
}))

const Container = styled(Box)(({ theme }) => ({
  width: '50%',
}))

const ListItemButton = styled(ListItemButtonMui)(({ theme }) => ({
  width: '90%',
  backgroundColor: '#dabeff',
  marginBottom: 5,
  borderRadius: 5,

  '&.archived': {
    backgroundColor: '#0000000a',
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

    console.log('categoryName', categoryName)

    const category = registeredExpenseCategories.find((cat) =>
      cat.categoryName === categoryName)

    console.log('category', category)

    const registeredCategoryIndex = registeredExpenseCategories.findIndex(category => {
      return category.categoryName === categoryName
    })

    if (registeredCategoryIndex !== -1) {
      const newArray = [...registeredCategories]

      newArray[registeredCategoryIndex] = {
        ...category,
        archived: !category.archived,
      }

      console.log('newArray', newArray)

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
