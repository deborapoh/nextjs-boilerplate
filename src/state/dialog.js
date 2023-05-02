import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const dialogs = {
  preferences: 'Preferences',
  configurations: 'Configurations',
  company: 'Company',
  companyEdit: 'Company Edit',
  expenseCategory: 'Expense Category',
  expenseCategoryEdit: 'Expense Category Edit',
  history: 'History',
  generateInvoice: 'Generate Invoice',
  invoiceEdit: 'Invoice Edit',
  expenseEdit: 'Expense Edit',
  generateExpense: 'Generate Expense',
}

export const dialogState = atom({
  key: 'dialogState',
  default: '',
})

export const useDialogState = () => useRecoilValue(dialogState)
export const useIsDialogOpen = (dialog) => useDialogState() === dialog
export const useSetDialogState = () => useSetRecoilState(dialogState)

export const editCompanyState = atom({
  key: 'editCompanyState',
  default: {},
})

export const useEditCompanyState = () => useRecoilValue(editCompanyState)
export const useSetEditCompanyState = () => useSetRecoilState(editCompanyState)

export const editExpenseCategoryState = atom({
  key: 'editExpenseCategoryState',
  default: {},
})

export const useEditExpenseCategoryState = () => useRecoilValue(editExpenseCategoryState)
export const useSetEditExpenseCategoryState = () => useSetRecoilState(editExpenseCategoryState)
