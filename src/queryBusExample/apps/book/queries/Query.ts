export abstract class Query {
  readonly type: string;

  constructor (type: string) {
    this.type = type
  }
}
