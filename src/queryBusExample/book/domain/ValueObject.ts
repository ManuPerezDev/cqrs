type Primitives = String | string | number | Boolean | boolean | Date | undefined | null;

export class ValueObject<T extends Primitives> {
  protected _value: T;

  constructor (value: T) {
    this._value = value
  }

  public value (): T {
    return this._value
  }
}
