import { fetch } from 'cross-fetch'
import { get, post } from 'extra-request'
import { url, pathname, text, json, searchParams, signal } from 'extra-request/lib/es2018/transformers'
import { ok, toText, toJSON } from 'extra-response'
import { Json } from '@blackglory/types'

export interface ChanClientOptions {
  server: string
  token?: string
}

export interface ChanClientRequestOptions {
  signal?: AbortSignal
  token?: string
}

export class ChanClient {
  constructor(private options: ChanClientOptions) {}

  async enqueue(
    id: string
  , val: string
  , options: ChanClientRequestOptions = {}
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

  async enqueueJSON(
    id: string
  , val: Json
  , options: ChanClientRequestOptions = {}
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

  async dequeue(
    id: string
  , options?: ChanClientRequestOptions
  ): Promise<string> {
    return this._dequeue(id, options).then(toText)
  }

  async dequeueJSON(
    id: string
  , options?: ChanClientRequestOptions
  ): Promise<Json> {
    return this._dequeue(id, options).then(toJSON)
  }

  private async _dequeue(
    id: string
  , options: ChanClientRequestOptions = {}
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
