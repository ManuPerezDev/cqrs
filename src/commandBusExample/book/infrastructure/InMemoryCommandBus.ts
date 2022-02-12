import { CommandBus } from '../domain/CommandBus'
import { CommandHandler } from '../../apps/book/handlers/CommandHandler'

export class InMemoryCommandBus implements CommandBus {
  private readonly handlers: { [key: string]: CommandHandler } = {}

  addHandler (commandName: string, commandHandler: CommandHandler): void {
    this.handlers[commandName] = commandHandler
  }

  handle (object: object): void {
    // @ts-ignore
    const commandName = object.constructor.name
    const handler = this.handlers[commandName]

    if (handler === undefined) {
      throw new Error(
        `handler for command ${commandName} not found`
      )
    }

    return handler.handle(object)
  }
}
