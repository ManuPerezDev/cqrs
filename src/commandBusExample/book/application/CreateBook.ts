import { BookRepository } from '../domain/BookRepository'
import { Book } from '../domain/Book'
import { Name } from '../domain/valueObjects/Name'
import { Author } from '../domain/valueObjects/Author'

export class CreateBook {
  private repository: BookRepository

  constructor (repository: BookRepository) {
    this.repository = repository
  }

  run (name: Name, author: Author) {
    console.log('6.- Execute use case')
    const book = new Book(name, author)
    this.repository.save(book)
  }
}
