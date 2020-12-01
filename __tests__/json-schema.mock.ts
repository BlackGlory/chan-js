import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { badAuth, badJson } from '@test/utils'

export const server = setupServer(
  rest.get('/api/chan-with-json-schema', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(200), ctx.json(['id']))
  })
, rest.get('/api/chan/:id/json-schema', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(200), ctx.json({}))
  })
, rest.put('/api/chan/:id/json-schema', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    if (badJson(req)) return res(ctx.status(400))
    return res(ctx.status(204))
  })
, rest.delete('/api/chan/:id/json-schema', (req, res, ctx) => {
    if (badAuth(req)) return res(ctx.status(401))
    return res(ctx.status(204))
  })
)
