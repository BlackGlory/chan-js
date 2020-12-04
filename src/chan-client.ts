import { fetch } from 'cross-fetch'
import { checkHTTPStatus, toText } from './utils'
import { get, post } from 'extra-request'
import { url, pathname, text, searchParams, signal } from 'extra-request/lib/es2018/transformers'

export interface ChanClientOptions {
  server: string
  token?: string
}

export class ChanClient {
  constructor(private options: ChanClientOptions) {}

  async enqueue(id: string, val: string, options: {
    signal?: AbortSignal
    token?: string
  } = {}): Promise<void> {
    const token = options.token ?? this.options.token

    const req = post(
      url(this.options.server)
    , pathname(`chan/${id}`)
    , token && searchParams({ token })
    , text(val)
    , options.signal && signal(options.signal)
    )

    await fetch(req)
      .then(checkHTTPStatus)
  }

  async dequeue(id: string, options: {
    signal?: AbortSignal
    token?: string
  } = {}): Promise<string> {
    const token = options.token ?? this.options.token

    const req = get(
      url(this.options.server)
    , pathname(`chan/${id}`)
    , token && searchParams({ token })
    , options.signal && signal(options.signal)
    )

    return await fetch(req)
      .then(checkHTTPStatus)
      .then(toText)
  }
}
