import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { badToken } from './utils'

export const server = setupServer(
  rest.post('/chan/:id', (req, res, ctx) => {
    if (badToken(req)) return res(ctx.status(401))

    return res(ctx.status(204))
  })

, rest.get('/chan/:id', (req, res, ctx) => {
    if (badToken(req)) return res(ctx.status(401))

    return res(ctx.status(200), ctx.text('message'))
  })
)
