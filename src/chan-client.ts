import { postText, get } from './utils'

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
    const writeToken = options.token ?? this.options.token
    await postText({
      baseUrl: this.options.server
    , pathname: writeToken ? `chan/${id}?token=${writeToken}` : `chan/${id}`
    , body: val
    })
  }

  async dequeue(id: string, options: {
    signal?: AbortSignal
    token?: string
  } = {}): Promise<string> {
    const readToken = options.token ?? this.options.token
    const res = await get({
      baseUrl: this.options.server
    , pathname: readToken ? `chan/${id}?token=${readToken}` : `chan/${id}`
    })
    return res.text()
  }
}
