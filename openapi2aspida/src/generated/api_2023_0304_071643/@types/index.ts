/* eslint-disable */
export type Task = External5

export type Tasks = External6

export type External8 = External10 & {
  data?: External11[] | undefined
}

export type External7 = {
  /** ID of the task */
  id: number
  /** Name of the task */
  name: string
  /** Whether the task is completed */
  is_completed: boolean
  /** Deadline of the task */
  deadline: string
}

export type External9 = {
  /** id */
  id: string
  /** 名前 */
  name: string
  /** 歳 */
  age?: string | undefined
}

export type External10 = {
  /** 現在のページ番号 */
  current_page?: number | undefined
  /** 現在のページの最後のデータ番号 */
  from?: number | undefined
  /** 最後のページ番号 */
  last_page?: number | undefined
  /** 最後のページのURL */
  last_page_url?: string | undefined
  /** 次のページのURL */
  next_page_url?: string | undefined
  /** エンドポイント */
  path?: string | undefined
  /** １ページ当たりのデータ数 */
  per_page?: number | undefined
  /** 前のページのURL */
  prev_page_url?: string | undefined
  /** 現在のページの最初データ番号 */
  to?: number | undefined
  /** 検索ヒット数 */
  total?: number | undefined
}

export type External11 = {
  /** ID of the task */
  id: number
  /** Name of the task */
  name: string
  /** Whether the task is completed */
  is_completed: boolean
  /** Deadline of the task */
  deadline: string
}

export type External0 = string

export type External1 = string

export type External2 = {
  data: External9[]
}

export type External3 = 'EDIT' | 'WAITING' | 'APPLIED'

export type External4 = {
  /** 名前 */
  name?: string | undefined
  /** 歳 */
  age?: string | undefined
}

export type External5 = {
  /** ID of the task */
  id: number
  /** Name of the task */
  name: string
  /** Whether the task is completed */
  is_completed: boolean
  /** Deadline of the task */
  deadline: string
}

export type External6 = External10 & {
  data?: External11[] | undefined
}
