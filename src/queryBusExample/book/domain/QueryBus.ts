import { QueryHandler } from '../../apps/book/handlers/QueryHandler'
import { Query } from '../../apps/book/queries/Query'

export interface QueryBus {
  ask<R>(query: Query): Promise<R>
  addHandler(handler: QueryHandler<Query, object>): void
}
