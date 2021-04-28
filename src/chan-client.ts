import { fetch } from 'extra-fetch'
import { get, post } from 'extra-request'
import { url, pathname, text, json, searchParams, signal, keepalive } from 'extra-request/lib/es2018/transformers'
import { ok, toText, toJSON } from 'extra-response'

export { HTTPClientError } from '@blackglory/http-status'

export interface IChanClientOptions {
  server: string
  token?: string
  keepalive?: boolean
}

export interface IChanClientRequestOptions {
  signal?: AbortSignal
  token?: string
  keepalive?: boolean
}

export class ChanClient {
  constructor(private options: IChanClientOptions) {}

  async enqueue(
    namespace: string
  , val: string
  , options: IChanClientRequestOptions = {}
  ): Promise<void> {
    const token = options.token ?? this.options.token

    const req = post(
      url(this.options.server)
    , pathname(`chan/${namespace}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    , text(val)
    , keepalive(options.keepalive ?? this.options.keepalive)
    )

    await fetch(req).then(ok)
  }

  async enqueueJSON<T>(
    namespace: string
  , val: T
  , options: IChanClientRequestOptions = {}
  ): Promise<void> {
    const token = options.token ?? this.options.token

    const req = post(
      url(this.options.server)
    , pathname(`chan/${namespace}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    , json(val)
    , keepalive(options.keepalive ?? this.options.keepalive)
    )

    await fetch(req).then(ok)
  }

  dequeue(
    namespace: string
  , options?: IChanClientRequestOptions
  ): Promise<string> {
    return this._dequeue(namespace, options).then(toText)
  }

  async dequeueJSON<T>(
    namespace: string
  , options?: IChanClientRequestOptions
  ): Promise<T> {
    return await this._dequeue(namespace, options).then(toJSON) as T
  }

  private async _dequeue(
    namespace: string
  , options: IChanClientRequestOptions = {}
  ): Promise<Response> {
    const token = options.token ?? this.options.token

    const req = get(
      url(this.options.server)
    , pathname(`chan/${namespace}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    , keepalive(options.keepalive ?? this.options.keepalive)
    )

    return await fetch(req).then(ok)
  }
}
