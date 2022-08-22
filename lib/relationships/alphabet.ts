import { braidArrays } from '../../helpers/braidArrays'
import { AbstractProductUpper, AbstractProductLower } from '../products'

/**
  * These Concrete Products are created by corresponding Concrete Factories.
  */
export class ConcreteProductUpperAlphabet implements AbstractProductUpper {
  collection: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  public getUpper(): string {
    // The result of the product A1
    return this.collection;
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductLowerAlphabet implements AbstractProductLower {

  public getLower(collection: string): string {
    // The result of the product B1.
    return collection.toLowerCase()
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public mergeWithLower(collaborator: AbstractProductUpper): string {
    const collection = collaborator.getUpper()
    const lower = this.getLower(collection).split('')
    const upper = collection.split('')
    // The result of the B1 collaborating with the (${result})
    return braidArrays(upper, lower).join('');
  }
}