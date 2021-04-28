import { server } from '@test/chan.mock'
import { ChanClient } from '@src/chan-client'
import { TOKEN } from './utils'
import '@blackglory/jest-matchers'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
beforeEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('ChanClient', () => {
  test('enqueue(namespace: string, val: string, options?: { signal?: string, token?: string }): Promise<void>', async () => {
    const client = createClient()
    const namespace = 'namespace'
    const val = 'message'

    const result = client.enqueue(namespace, val)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBeUndefined()
  })

  test('enqueueJSON(namespace: string, val: Json, options?: { signal?: string, token?: string }): Promise<void>', async () => {
    const client = createClient()
    const namespace = 'namespace'
    const val = 'message'

    const result = client.enqueue(namespace, val)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBeUndefined()
  })

  test('dequeue(namespace: string, options?: { signal?: string, token?: string }): Promise<string>', async () => {
    const client = createClient()
    const namespace = 'namespace'

    const result = client.dequeue(namespace)
    const proResult = await result

    expect(result).toBePromise()
    expect(proResult).toBe('null')
  })

  test('dequeueJSON(namespace: string, options?: { signal?: string, token?: string }): Promise<Json>', async () => {
    const client = createClient()
    const namespace = 'namespace'

    const result = client.dequeueJSON(namespace)
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
