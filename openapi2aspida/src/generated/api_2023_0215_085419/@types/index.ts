/* eslint-disable */
export type Task = External2

export type Tasks = External3

export type External4 = External5 & {
  data?: External6[] | undefined
}

export type External7 = {
  /** ID of the task */
  id?: number | undefined
  /** Name of the task */
  name: string
  /** Whether the task is completed */
  is_completed: boolean
  /** Deadline of the task */
  deadline: string
}

export type External5 = {
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

export type External6 = {
  /** ID of the task */
  id?: number | undefined
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
  /** ID of the task */
  id?: number | undefined
  /** Name of the task */
  name: string
  /** Whether the task is completed */
  is_completed: boolean
  /** Deadline of the task */
  deadline: string
}

export type External3 = External5 & {
  data?: External6[] | undefined
}
