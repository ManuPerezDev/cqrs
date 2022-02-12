import { BookRepository } from '../domain/BookRepository'
import { Book } from '../domain/Book'

export class CreateBook {
  private repository: BookRepository

  constructor (repository: BookRepository) {
    this.repository = repository
  }

  run (book: Book) {
    console.log('6.- Execute use case')
    this.repository.save(book)
  }
}
