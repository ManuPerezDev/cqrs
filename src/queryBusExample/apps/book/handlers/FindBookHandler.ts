import { QueryHandler } from './QueryHandler'
import { Name } from '../../../book/domain/valueObjects/Name'
import { FindBook } from '../../../book/application/FindBook'
import { FindBookQuery } from './FindBookQuery'
import { FindBookQueryResponse } from './FindBookQueryResponse'

export class FindBookHandler implements QueryHandler<FindBookQuery, FindBookQueryResponse> {
  private service: FindBook

  constructor (service: FindBook) {
    this.service = service
  }

  async handle (query: FindBookQuery): Promise<FindBookQueryResponse> {
    const name = new Name(query.name)
    const response = await this.service.run(name)
    return new FindBookQueryResponse(response.name.value(), response.author.value())
  }

  subscribedTo (): string {
    return FindBookQuery.type
  }
}
