import type { AspidaClient, BasicHeaders } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from '.'
import type { Methods as Methods1 } from './_id@string'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '{server}' : baseURL).replace(/\/$/, '')
  const PATH0 = '/users'
  const GET = 'GET'
  const PUT = 'PUT'

  return {
    _id: (val0: string) => {
      const prefix0 = `${PATH0}/${val0}`

      return {
        /**
         * ユーザー情報更新
         * @param option.body - リクエスト
         */
        put: (option: { body: Methods1['put']['reqBody'], query?: Methods1['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).send(),
        /**
         * ユーザー情報更新
         * @param option.body - リクエスト
         */
        $put: (option: { body: Methods1['put']['reqBody'], query?: Methods1['put']['query'] | undefined, config?: T | undefined }) =>
          fetch<void, BasicHeaders, Methods1['put']['status']>(prefix, prefix0, PUT, option).send().then(r => r.body),
        $path: (option?: { method: 'put'; query: Methods1['put']['query'] } | undefined) =>
          `${prefix}${prefix0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    },
    /**
     * ユーザー一覧取得
     * @returns 200
     */
    get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json(),
    /**
     * ユーザー一覧取得
     * @returns 200
     */
    $get: (option?: { config?: T | undefined } | undefined) =>
      fetch<Methods0['get']['resBody'], BasicHeaders, Methods0['get']['status']>(prefix, PATH0, GET, option).json().then(r => r.body),
    $path: () => `${prefix}${PATH0}`
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
