import { CommandBus } from '../domain/CommandBus'
import { CreateBookCommand } from '../../apps/book/commands/CreateBookCommand'

export class BookPostController {
  private commandBus: CommandBus

  constructor (commandBus: CommandBus) {
    this.commandBus = commandBus
  }

  run (name: string, author: string): void {
    const command = new CreateBookCommand(name, author)

    console.log('5.- Run handle method for command')
    this.commandBus.handle(command)
  }
}
