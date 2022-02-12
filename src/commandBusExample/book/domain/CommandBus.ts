import { CommandHandler } from '../../apps/book/handlers/CommandHandler'

export interface CommandBus {
  addHandler(commandName: string, commandHandler: CommandHandler): void
  handle(object: object): void
}
