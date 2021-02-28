import { fetch } from 'extra-fetch'
import { get, post } from 'extra-request'
import { url, pathname, text, json, searchParams, signal } from 'extra-request/lib/es2018/transformers'
import { ok, toText, toJSON } from 'extra-response'

export interface IChanClientOptions {
  server: string
  token?: string
}

export interface IChanClientRequestOptions {
  signal?: AbortSignal
  token?: string
}

export class ChanClient {
  constructor(private options: IChanClientOptions) {}

  async enqueue(
    id: string
  , val: string
  , options: IChanClientRequestOptions = {}
  ): Promise<void> {
    const token = options.token ?? this.options.token

    const req = post(
      url(this.options.server)
    , pathname(`chan/${id}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    , text(val)
    )

    await fetch(req).then(ok)
  }

  async enqueueJSON<T>(
    id: string
  , val: T
  , options: IChanClientRequestOptions = {}
  ): Promise<void> {
    const token = options.token ?? this.options.token

    const req = post(
      url(this.options.server)
    , pathname(`chan/${id}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    , json(val)
    )

    await fetch(req).then(ok)
  }

  dequeue(
    id: string
  , options?: IChanClientRequestOptions
  ): Promise<string> {
    return this._dequeue(id, options).then(toText)
  }

  async dequeueJSON<T>(
    id: string
  , options?: IChanClientRequestOptions
  ): Promise<T> {
    return await this._dequeue(id, options).then(toJSON) as T
  }

  private async _dequeue(
    id: string
  , options: IChanClientRequestOptions = {}
  ): Promise<Response> {
    const token = options.token ?? this.options.token

    const req = get(
      url(this.options.server)
    , pathname(`chan/${id}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    )

    return await fetch(req).then(ok)
  }
}
