import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const companyState = atom({
  key: 'companyState',
  default: [],
})

export const useCompanyState = () => useRecoilValue(companyState)

export const useSetCompanyState = () => useSetRecoilState(companyState)
