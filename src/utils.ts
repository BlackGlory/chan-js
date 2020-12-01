import { Json } from '@blackglory/types'
import { fetch, Headers } from 'cross-fetch'
import { HTTPError } from './errors'

export async function get(
  { baseUrl, pathname, adminPassword, signal }: {
    baseUrl: string
    pathname: string
    adminPassword?: string
    signal?: AbortSignal
  }
): Promise<Response> {
  const url = resolve(baseUrl, pathname)
  const headers = new Headers()
  if (adminPassword) headers.append('Authorization', `Bearer ${adminPassword}`)
  const res = await fetch(url, { headers, signal })
  checkHTTPStatus(res)
  return res
}

export async function postText(
  { baseUrl, pathname, body, signal }: {
    baseUrl: string
    pathname: string
    body: string
    signal?: AbortSignal
  }
): Promise<Response> {
  const url = resolve(baseUrl, pathname)
  const res = await fetch(url, {
    method: 'POST'
  , body
  , signal
  })
  checkHTTPStatus(res)
  return res
}

export async function postJson(
  { baseUrl, pathname, json, adminPassword, signal }: {
    baseUrl: string
    pathname: string
    json: Json
    adminPassword?: string
    signal?: AbortSignal
  }
): Promise<Response> {
  const url = resolve(baseUrl, pathname)
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  if (adminPassword) headers.append('Authorization', `Bearer ${adminPassword}`)
  const body = JSON.stringify(json)
  const res = await fetch(url, {
    method: 'POST'
  , headers
  , body
  , signal
  })
  checkHTTPStatus(res)
  return res
}

export async function del(
  { baseUrl, pathname, adminPassword, signal }: {
    baseUrl: string
    pathname: string
    adminPassword?: string
    signal?: AbortSignal
  }
): Promise<Response> {
  const url = resolve(baseUrl, pathname)
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  if (adminPassword) headers.append('Authorization', `Bearer ${adminPassword}`)
  const res = await fetch(url, {
    method: 'DELETE'
  , headers
  , signal
  })
  checkHTTPStatus(res)
  return res
}

export async function put(
  { baseUrl, pathname, adminPassword, signal }: {
    baseUrl: string
    pathname: string
    adminPassword?: string
    signal?: AbortSignal
  }
): Promise<Response> {
  const url = resolve(baseUrl, pathname)
  const headers = new Headers()
  if (adminPassword) headers.append('Authorization', `Bearer ${adminPassword}`)
  const res = await fetch(url, {
    method: 'PUT'
  , headers
  , signal
  })
  checkHTTPStatus(res)
  return res
}

export async function putJson(
  { baseUrl, pathname, json, adminPassword, signal }: {
    baseUrl: string
    pathname: string
    json: Json
    adminPassword?: string
    signal?: AbortSignal
  }
): Promise<Response> {
  const url = resolve(baseUrl, pathname)
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  if (adminPassword) headers.append('Authorization', `Bearer ${adminPassword}`)
  const res = await fetch(url, {
    method: 'PUT'
  , headers
  , body: JSON.stringify(json)
  , signal
  })
  checkHTTPStatus(res)
  return res
}

function resolve(baseUrl: string, pathname: string): string {
  return new URL(pathname, baseUrl).href
}

function checkHTTPStatus(res: Response) {
  if (!res.ok) throw new HTTPError(res)
}
