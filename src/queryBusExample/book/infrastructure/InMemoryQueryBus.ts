import { QueryBus } from '../domain/QueryBus'
import { QueryHandler } from '../../apps/book/handlers/QueryHandler'
import { Query } from '../../apps/book/queries/Query'
import { QueryResponse } from '../../apps/book/responses/QueryResponse'

export class InMemoryQueryBus implements QueryBus {
  private readonly handlers: { [key: string]: QueryHandler<Query, QueryResponse> } = {}

  addHandler (handler: QueryHandler<Query, QueryResponse>): void {
    const queryType = handler.subscribedTo()

    if (this.handlers[queryType]) {
      throw new Error('Handler already exists!')
    }

    this.handlers[queryType] = handler
  }

  ask<R> (query: Query): Promise<R> {
    const handler = this.handlers[query.type]

    if (!handler) {
      throw new Error('Missing handler!')
    }

    return handler.handle(query) as Promise<R>
  }
}
