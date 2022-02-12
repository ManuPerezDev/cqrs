import { BookRepository } from '../domain/BookRepository'
import { Book } from '../domain/Book'

export class MysqlBookRepository implements BookRepository {
  save (book: Book): void {
    console.log('7.- Persist in DB')
    console.log('----This is an example of repository implementation----')
    console.log(`----I am pretending to save a Book with name ${book.name.value()} and author ${book.author.value()}----`)
  }
}
