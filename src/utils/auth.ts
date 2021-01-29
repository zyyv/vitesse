export const localClear = () => localStorage.clear()
export const sessionClear = () => sessionStorage.clear()
export const storageClear = () => {
  localClear()
  sessionClear()
}

export const getRemember = () => Number(localStorage.getItem('remember'))
export const setRemember = (remember: number = 1) => localStorage.setItem('remember', String(remember))
export const removeRemember = () => localStorage.removeItem('remember')

const getStorage = () => getRemember() ? localStorage : sessionStorage

export const getToken = () => getStorage().getItem('token')
export const setToken = (token: string) => getStorage().setItem('token', token)
export const removeToken = () => getStorage().removeItem('token')

export const getUserInfo = () => {
  const userInfo = getStorage().getItem('userInfo')
  if (userInfo) return JSON.parse(userInfo)
  else return {}
}
export const setUserInfo = (userInfo: object) => getStorage().setItem('userInfo', JSON.stringify(userInfo))
export const removeUserInfo = () => getStorage().removeItem('userInfo')

export const getDevice = () => getStorage().getItem('device')
export const setDevice = (device: string) => getStorage().setItem('device', device)