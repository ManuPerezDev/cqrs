import { BookRepository } from '../domain/BookRepository'
import { Name } from '../domain/valueObjects/Name'

export class FindBook {
  private repository: BookRepository

  constructor (repository: BookRepository) {
    this.repository = repository
  }

  async run (name: Name) {
    console.log('6.- Execute use case')
    return this.repository.find(name)
  }
}
