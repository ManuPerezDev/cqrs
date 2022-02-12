export class CreateBookCommand {
  readonly name: string
  readonly author: string

  constructor (name: string, author: string) {
    this.name = name
    this.author = author
  }
}
