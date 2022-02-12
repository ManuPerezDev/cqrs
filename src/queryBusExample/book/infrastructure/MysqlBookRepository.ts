import { BookRepository } from '../domain/BookRepository'
import { Name } from '../domain/valueObjects/Name'
import { Author } from '../domain/valueObjects/Author'
import { Book } from '../domain/Book'

export class MysqlBookRepository implements BookRepository {
  async find (name: Name): Promise<Book> {
    console.log('7.- Retrieve from DB')
    console.log('----This is an example of repository implementation----')
    console.log(`----I am pretending to retrieve a Book from DB with name ${name.value()}----`)
    return new Book(new Name('1984'), new Author('George Orwell'))
  }
}
