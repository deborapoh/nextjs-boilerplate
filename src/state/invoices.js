import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const invoiceState = atom({
  key: 'invoiceState',
  default: [],
})

export const useInvoiceState = () => useRecoilValue(invoiceState)

export const useSetInvoiceState = () => useSetRecoilState(invoiceState)
