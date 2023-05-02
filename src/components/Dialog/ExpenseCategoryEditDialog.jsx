import { Dialog as DialogMui, DialogContent as DialogContentMui, DialogTitle, styled } from "@mui/material"
import { useForm } from 'react-hook-form'
import { useEffect, useMemo } from "react"
import _ from 'lodash'

import SubmitButton from "../Button/SubmitButton"
import { dialogs, useEditExpenseCategoryState, useIsDialogOpen, useSetDialogState } from "@/state/dialog"
import { useExpenseCategoryState, useSetExpenseCategoryState } from "@/state/expenseCategory"
import CategoryNameInput from "../Input/CategoryNameInput"

const Dialog = styled(DialogMui)(() => ({
  // display: 'flex',
}))

const DialogContent = styled(DialogContentMui)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: 500,
}))

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}))

const ExpenseCategoryEditDialog = () => {
  const open = useIsDialogOpen(dialogs.expenseCategoryEdit)
  const setDialogState = useSetDialogState()
  const setExpenseCategoryState = useSetExpenseCategoryState()
  const editExpenseCategoryState = useEditExpenseCategoryState()
  const registeredCategories = useExpenseCategoryState()

  const defaultValues = useMemo(
    () => ({
      archived: editExpenseCategoryState?.archived || false,
      categoryName: editExpenseCategoryState?.categoryName || '',
    }),
    [editExpenseCategoryState],
  )

  const {
    formState: { errors },
    handleSubmit,
    register,
    clearErrors,
    reset,
  } = useForm({
    defaultValues,
    mode: 'onChange',
  })

  const onSubmit = async (data, e) => {
    e.preventDefault()

    const { archived, categoryName } = data

    const registeredCategoryIndex = registeredCategories.findIndex(category => {
      return category.id === editExpenseCategoryState.id
    })

    if (registeredCategoryIndex !== -1) {
      const duplicatedCategory = registeredCategories.find((category) => {
        return category.categoryName !== editExpenseCategoryState?.categoryName
          && category.categoryName === categoryName
      })

      if (duplicatedCategory) {
        alert('Duplicated category') // TODO: add error message
        return
      }

      const newArray = [...registeredCategories]

      newArray[registeredCategoryIndex] = {
        id: registeredCategories[registeredCategoryIndex].id,
        archived: archived || false,
        categoryName,
      }

      setExpenseCategoryState(newArray)
      setDialogState(dialogs.expenseCategory)
    }
  }

  useEffect(() => {
    if (!defaultValues.categoryName) {
      return
    }

    reset(defaultValues)
  }, [defaultValues, reset])

  if (_.isEmpty(editExpenseCategoryState)) {
    return
  }

  return (
    <Dialog
      open={open}
      onClose={() => setDialogState('')}
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Editar Categoria de Despesas
        <BackButton
          aria-label="back"
          onClick={() => setDialogState(dialogs.expenseCategory)}
        />
      </DialogTitle>
      <DialogContent dividers>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <CategoryNameInput errors={errors} register={register} />
          <SubmitButton name="Salvar" onClick={() => clearErrors("")} />
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default ExpenseCategoryEditDialog
