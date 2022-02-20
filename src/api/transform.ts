import { isArray } from '@chris-zhu/utils'
import { http } from '@/modules/http'
import type { IApis, METHODS } from '.'

type fn<P, C> = (p: P, c: C) => any | Promise<any> // P: params C: config

interface fns<P, C> extends Record<string, fn<P, C>> {}

interface ResultApi<P, C> {
  [key: string]: fns<P, C> | fn<P, C>
}

function transform<P=any, C=any>(apis: IApis): ResultApi<P, C> {
  return Object.fromEntries(Object.entries(apis).map(([key, modules]) => {
    if (isArray(modules)) {
      const result = Object.create(null) as fns<P, C>
      modules.forEach((module) => {
        result[module.name as string] = generateHttp(module.path, module.method)
      })
      return [key, result]
    } else {
      const result = generateHttp(modules.path, modules.method)
      return [key, result]
    }
  }))
}

function generateHttp(path: string, method: METHODS) {
  return <T>(params?: any, config?: any) => http[`$${method}`]<T>(path, params, config)
}

export default transform
