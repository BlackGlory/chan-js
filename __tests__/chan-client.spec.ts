import { server } from '@test/chan.mock'
import { ChanClient } from '@src/chan-client'
import { TOKEN } from './utils'
import '@blackglory/jest-matchers'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('ChanClient', () => {
  it('enqueue(id: string, val: string, options?: { signal?: string, token?: string }): Promise<void>', async () => {
    const client = createClient()
    const id = 'id'
    const val = 'message'

    const result = client.enqueue(id, val)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBeUndefined()
  })

  it('enqueueJSON(id: string, val: Json, options?: { signal?: string, token?: string }): Promise<void>', async () => {
    const client = createClient()
    const id = 'id'
    const val = 'message'

    const result = client.enqueue(id, val)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBeUndefined()
  })

  it('dequeue(id: string, options?: { signal?: string, token?: string }): Promise<string>', async () => {
    const client = createClient()
    const id = 'id'

    const result = client.dequeue(id)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBe('null')
  })

  it('dequeueJSON(id: string, options?: { signal?: string, token?: string }): Promise<Json>', async () => {
    const client = createClient()
    const id = 'id'

    const result = client.dequeueJSON(id)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBe(null)
  })
})

function createClient() {
  return new ChanClient({
    server: 'http://localhost'
  , token: TOKEN
  })
}
