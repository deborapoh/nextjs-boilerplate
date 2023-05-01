import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const dialogs = {
  preferences: 'Preferences',
  configurations: 'Configurations',
  company: 'Company',
  expenseCategory: 'Expense Category',
  history: 'History',
}

export const dialogState = atom({
  key: 'dialogState',
  default: '',
})

export const useDialogState = () => useRecoilValue(dialogState)

export const useIsDialogOpen = (dialog) => useDialogState() === dialog

export const useSetDialogState = () => useSetRecoilState(dialogState)
