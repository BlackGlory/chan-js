import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { badAuth } from '@test/utils'

export const server = setupServer(
  rest.get('/api/chan-with-tokens', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(200), ctx.json(['id']))
  })
, rest.get('/api/chan/:id/tokens', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(200), ctx.json([
      {
        token: 'token'
      , write: true
      , read: false
      }
    ]))
  })
, rest.put('/api/chan/:id/tokens/:token/write', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(204))
  })
, rest.delete('/api/chan/:id/tokens/:token/write', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(204))
  })
, rest.put('/api/chan/:id/tokens/:token/read', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(204))
  })
, rest.delete('/api/chan/:id/tokens/:token/read', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(204))
  })
)
