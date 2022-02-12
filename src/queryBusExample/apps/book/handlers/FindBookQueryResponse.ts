import { QueryResponse } from '../responses/QueryResponse'

export class FindBookQueryResponse implements QueryResponse {
  readonly name: string
  readonly author: string

  constructor (name: string, author: string) {
    this.name = name
    this.author = author
  }
}
