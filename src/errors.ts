export class HTTPError extends Error {
  name = this.constructor.name
  constructor(res: Response) {
    super(res.statusText)
  }
}
