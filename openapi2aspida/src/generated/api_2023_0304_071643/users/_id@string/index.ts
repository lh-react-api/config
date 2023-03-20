/* eslint-disable */
import type * as Types from '../../@types'

export type Methods = {
  /** ユーザー情報更新 */
  put: {
    query?: {
      /** 現在のステータス */
      status?: Types.External3 | undefined
    } | undefined

    status: 200
    /** リクエスト */
    reqBody: Types.External4
  }
}
