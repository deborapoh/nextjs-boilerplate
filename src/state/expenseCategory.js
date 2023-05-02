import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const expenseCategoryState = atom({
  key: 'expenseCategoryState',
  default: [],
})

export const useExpenseCategoryState = () => useRecoilValue(expenseCategoryState)

export const useSetExpenseCategoryState = () => useSetRecoilState(expenseCategoryState)
