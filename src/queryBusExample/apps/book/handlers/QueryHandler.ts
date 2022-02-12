import { Query } from '../queries/Query'

export interface QueryHandler<Q extends Query, R> {
  subscribedTo(): string
  handle(query: Q): Promise<R>
}
