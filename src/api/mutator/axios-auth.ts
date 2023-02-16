import Axios, { AxiosRequestConfig, AxiosPromise, AxiosError } from 'axios'

//import { getAuthViaCookies, getRecord } from '../../auth'
import { LoggedIn as PLoggedIn } from '../endpoints/auth'

export const AXIOS_INSTANCE = Axios.create({ baseURL: '/' })

// add a second `options` argument here if you want to pass extra options to each generated query
export const axiosAuth = <T>(config: AxiosRequestConfig, options?: AxiosRequestConfig): AxiosPromise<T> => {
  // const auth: string[][] = getAuthViaCookies()
  // const authHeaders = { headers: getRecord(auth) }

  // const updatedOptions = options ? { ...options, authHeaders } : authHeaders

  const promise = AXIOS_INSTANCE({
    ...config,
    //...updatedOptions,
  })

  console.log('foo')

  return promise
}

export type ErrorType<Error> = AxiosError<Error>
