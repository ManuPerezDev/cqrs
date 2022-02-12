import { QueryBus } from '../domain/QueryBus'
import { FindBookQuery } from '../../apps/book/handlers/FindBookQuery'
import { FindBookQueryResponse } from '../../apps/book/handlers/FindBookQueryResponse'

export class BookGetController {
  private commandBus: QueryBus

  constructor (commandBus: QueryBus) {
    this.commandBus = commandBus
  }

  async run (name: string) {
    const query = new FindBookQuery(name)

    console.log('5.- Run handle method for query')
    return await this.commandBus.ask<FindBookQueryResponse>(query)
  }
}
