import Axios, { AxiosRequestConfig, AxiosPromise, AxiosError } from 'axios'

import { LoggedIn as PLoggedIn } from '../endpoints/auth'

export const AXIOS_INSTANCE = Axios.create({ baseURL: '/' })

export const axiosAuth = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): AxiosPromise<T> => {

  const Logged : PLoggedIn | undefined = undefined

  const promise = AXIOS_INSTANCE({
    ...config,
  })

  console.log('foo')

  return promise
}

export type ErrorType<Error> = AxiosError<Error>
