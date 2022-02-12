import { InMemoryCommandBus } from '../../book/infrastructure/InMemoryCommandBus'
import { CreateBookCommand } from './commands/CreateBookCommand'
import { CreateBookCommandHandler } from './handlers/CreateBookCommandHandler'
import { MysqlBookRepository } from '../../book/infrastructure/MysqlBookRepository'
import { BookPostController } from '../../book/infrastructure/BookPostController'
import { CreateBook } from '../../book/application/CreateBook'

console.log('1.- Run app')
console.log('2.- Instance command bus')
const bus = new InMemoryCommandBus()
const repository = new MysqlBookRepository()
const service = new CreateBook(repository)

console.log('3.- Add handler')
// @ts-ignore
bus.addHandler(CreateBookCommand.name, new CreateBookCommandHandler(service))

console.log(bus)

console.log('4.- Run controller')
new BookPostController(bus).run('1984', 'George Orwell')
