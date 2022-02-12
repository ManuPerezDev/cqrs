import { Query } from '../queries/Query'

export class FindBookQuery extends Query {
  static type = 'FindBookQuery'
  readonly name: string

  constructor (name: string) {
    super(FindBookQuery.type)
    this.name = name
  }
}
