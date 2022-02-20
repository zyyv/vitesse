import transform from './transform'
import type { MaybeArray } from '@/types'

export enum METHODS {
  GET = 'get',
  POST = 'post',
  PUT = 'put'
}

interface IApi {
  name?: string
  path: string
  method: METHODS
}

export interface IApis extends Record<string, MaybeArray<IApi>> {}

export const apis: IApis = {
  users: [
    { name: 'list', path: '/list', method: METHODS.GET }, // users.list()
    { name: 'update', path: '/update', method: METHODS.POST } // users.update()
  ],
  login: { path: '/login', method: METHODS.POST } // login()
}

export default transform(apis)
