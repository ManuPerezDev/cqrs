import { Book } from './Book'

export interface BookRepository {
  save(book: Book): void
}
