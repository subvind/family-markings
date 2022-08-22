import { braidArrays } from '../../helpers/braidArrays'
import { AbstractProductUpper, AbstractProductLower } from '../products'

/**
  * These Concrete Products are created by corresponding Concrete Factories.
  */
export class ConcreteProductUpperAlphabet implements AbstractProductUpper {
  public getUpper(): string {
    // The result of the product A1
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductLowerAlphabet implements AbstractProductLower {

  public getLower(): string {
    // The result of the product B1.
    return 'abcdefghijklmnopqrstuvwxyz';
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public margeWithLower(collaborator: AbstractProductUpper): string {
    const lower = this.getLower().split('')
    const upper = collaborator.getUpper().split('')
    // The result of the B1 collaborating with the (${result})
    return braidArrays(upper, lower).join('');
  }
}