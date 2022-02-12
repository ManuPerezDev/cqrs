import { Name } from './valueObjects/Name'
import { Book } from './Book'

export interface BookRepository {
  find(name: Name): Promise<Book>
}
