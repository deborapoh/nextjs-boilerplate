import { Dialog as DialogMui, DialogContent as DialogContentMui, DialogTitle, IconButton, styled } from "@mui/material"
import SubmitButton from "../Button/SubmitButton"
import { useForm } from 'react-hook-form'
import { useEffect } from "react"
import { dialogs, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { ArrowBack } from '@mui/icons-material'
import { v4 } from 'uuid'
import ExpenseCategoryList from "../List/ExpenseCategoryList"
import CategoryNameInput from "../Input/CategoryNameInput"
import { useExpenseCategoryState, useSetExpenseCategoryState } from "@/state/expenseCategory"

const Dialog = styled(DialogMui)(() => ({
  // display: 'flex',
}))

const DialogContent = styled(DialogContentMui)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
}))

// TODO: isolate this css
const BackButton = styled(IconButton)(() => ({
  position: 'absolute',
  right: 8,
  top: 8,
  color: (theme) => theme.palette.grey[500],
}))

const ExpenseCategoryDialog = () => {
  const open = useIsDialogOpen(dialogs.expenseCategory)
  const setDialogState = useSetDialogState()
  const registeredExpenseCategories = useExpenseCategoryState()
  const setExpenseCategoryState = useSetExpenseCategoryState()

  const defaultValues = {
    categoryName: '',
  }

  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    isSubmitSuccessful,
  } = useForm({
    mode: 'onChange',
    defaultValues
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const { categoryName } = data

    const newCategory = {
      id: v4(),
      archived: false,
      categoryName,
    }

    const duplicatedCategory = registeredExpenseCategories.find(
      (category) => category.categoryName === newCategory.categoryName
    )

    if (duplicatedCategory) {
      alert('Duplicated category')
      return
    }

    setExpenseCategoryState([...registeredExpenseCategories, newCategory])
  }

  useEffect(() => {
    if (!isSubmitSuccessful) {
      return
    }

    reset(defaultValues)
  }, [isSubmitSuccessful])

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
      fullWidth
      maxWidth="lg"
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Categorias de Despesas
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.preferences)}
        >
          <ArrowBack />
        </BackButton>
      </DialogTitle>
      <DialogContent dividers>
        <ExpenseCategoryList />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CategoryNameInput errors={errors} register={register} />
          <SubmitButton name="Cadastrar" onClick={() => clearErrors("")} />
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseCategoryDialog
