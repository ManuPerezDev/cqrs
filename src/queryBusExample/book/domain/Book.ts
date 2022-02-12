import { Name } from './valueObjects/Name'
import { Author } from './valueObjects/Author'

export class Book {
  readonly name: Name
  readonly author: Author

  constructor (name: Name, author: Author) {
    this.name = name
    this.author = author
  }
}
