import { get, putJson, del } from './utils'

export interface TokenPolicyClientOptions {
  server: string
  adminPassword: string
}

export class TokenPolicyClient {
  constructor(private options: TokenPolicyClientOptions) {}

  WriteTokenRequired = new WriteTokenRequired(this.options)
  ReadTokenRequired = new ReadTokenRequired(this.options)

  async getIds(): Promise<string[]> {
    const res = await get({
      baseUrl: this.options.server
    , pathname: '/api/chan-with-token-policies'
    , adminPassword: this.options.adminPassword
    })
    return await res.json()
  }

  async get(id: string): Promise<{
    writeTokenRequired: boolean | null
    readTokenRequired: boolean | null
  }> {
    const res = await get({
      baseUrl: this.options.server
    , pathname: `/api/chan/${id}/token-policies`
    , adminPassword: this.options.adminPassword
    })
    return await res.json()
  }
}

class WriteTokenRequired {
  constructor(private options: TokenPolicyClientOptions) {}

  async set(id: string, val: boolean): Promise<void> {
    await putJson({
      baseUrl: this.options.server
    , pathname: `/api/chan/${id}/token-policies/write-token-required`
    , adminPassword: this.options.adminPassword
    , json: val
    })
  }

  async remove(id: string): Promise<void> {
    await del({
      baseUrl: this.options.server
    , pathname: `/api/chan/${id}/token-policies/write-token-required`
    , adminPassword: this.options.adminPassword
    })
  }
}

class ReadTokenRequired {
  constructor(private options: TokenPolicyClientOptions) {}

  async set(id: string, val: boolean): Promise<void> {
    await putJson({
      baseUrl: this.options.server
    , pathname: `/api/chan/${id}/token-policies/read-token-required`
    , adminPassword: this.options.adminPassword
    , json: val
    })
  }

  async remove(id: string): Promise<void> {
    await del({
      baseUrl: this.options.server
    , pathname: `/api/chan/${id}/token-policies/read-token-required`
    , adminPassword: this.options.adminPassword
    })
  }
}
