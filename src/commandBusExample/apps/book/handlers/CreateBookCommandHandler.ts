import { CommandHandler } from './CommandHandler'
import { CreateBookCommand } from '../commands/CreateBookCommand'
import { Name } from '../../../book/domain/valueObjects/Name'
import { Author } from '../../../book/domain/valueObjects/Author'
import { CreateBook } from '../../../book/application/CreateBook'

export class CreateBookCommandHandler implements CommandHandler {
  private service: CreateBook

  constructor (service: CreateBook) {
    this.service = service
  }

  handle (saveBookCommand: CreateBookCommand): void {
    const name = new Name(saveBookCommand.name)
    const author = new Author(saveBookCommand.author)
    this.service.run(name, author)
  }
}
