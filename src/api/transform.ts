import { isArray } from '@chris-zhu/utils'
import { http } from '@/modules/http'
import type { IApis, METHODS } from '.'

type ResultApi<T> = {
  [P in keyof T]: Promise<T[P]>
}

function transform<T extends keyof IApis>(apis: IApis) {
  return Object.fromEntries((Object.entries(apis) as [T, IApis[T]][]).map(([key, modules]) => {
    if (isArray(modules)) {
      const result = Object.create(null)
      modules.forEach(({ name, path, method }) => {
        result[name!] = generateHttp(path, method)
      })
      return [key, result]
    } else {
      const result = generateHttp(modules.path, modules.method)
      return [key, result]
    }
  })) as ResultApi<IApis>
}

function generateHttp(path: string, method: METHODS) {
  return <T>(params?: unknown, config?: any) => http[`$${method}`]<T>(path, params, config)
}

export default transform
