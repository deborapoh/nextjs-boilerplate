import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const expenseState = atom({
  key: 'expenseState',
  default: [],
})

export const useExpenseState = () => useRecoilValue(expenseState)

export const useSetExpenseState = () => useSetRecoilState(expenseState)
