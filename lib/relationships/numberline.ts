import { braidArrays } from '../../helpers/braidArrays';
import { AbstractProductUpper, AbstractProductLower } from '../products'

export class ConcreteProductUpperNumberline implements AbstractProductUpper {
  public getUpper(): string {
    // The result of the product A2.
    return ')!@#$%^&*(';
  }
}

export class ConcreteProductLowerNumberline implements AbstractProductLower {

  public getLower(): string {
    // The result of the product B2.
    return '0123456789';
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public margeWithLower(collaborator: AbstractProductUpper): string {
    const lower = this.getLower().split('')
    const upper = collaborator.getUpper().split('')
    // The result of the B2 collaborating with the (${result})
    return braidArrays(upper, lower).join('');
  }
}