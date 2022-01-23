import type { App } from 'vue'

export type UserModule = (ctx: App) => void

export interface IResponseData<T> {
  code: number
  data?: T
  msg: string
}
