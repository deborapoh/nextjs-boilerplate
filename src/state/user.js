import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

export const userState = atom({
  key: 'userState',
  default: {
    adminUser: 'admin',
    adminPassword: '123'
  },
})

export const useUserState = () => useRecoilValue(userState)

export const useSetUserState = () => useSetRecoilState(userState)
