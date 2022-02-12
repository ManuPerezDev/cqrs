import { InMemoryQueryBus } from '../../book/infrastructure/InMemoryQueryBus'
import { FindBookHandler } from './handlers/FindBookHandler'
import { MysqlBookRepository } from '../../book/infrastructure/MysqlBookRepository'
import { BookGetController } from '../../book/infrastructure/BookGetController'
import { FindBook } from '../../book/application/FindBook'

console.log('1.- Run app')
console.log('2.- Instance query bus')
const bus = new InMemoryQueryBus()
const repository = new MysqlBookRepository()
const service = new FindBook(repository)

console.log('3.- Add handler')
bus.addHandler(new FindBookHandler(service))

console.log(bus)

console.log('4.- Run controller')
new BookGetController(bus).run('1984').then(result => console.log(result)).catch()
