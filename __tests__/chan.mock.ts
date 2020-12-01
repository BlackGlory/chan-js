import { setupServer } from 'msw/node'
import { rest } from 'msw'

export const server = setupServer(
  rest.post('/chan/:id', (req, res, ctx) => {
    const token = req.url.searchParams.get('token')
    if (!token) return res(ctx.status(401))
    return res(ctx.status(204))
  })
, rest.get('/chan/:id', (req, res, ctx) => {
    const token = req.url.searchParams.get('token')
    if (!token) return res(ctx.status(401))
    return res(ctx.status(200), ctx.text('message'))
  })
)
