import { braidArrays } from '../../helpers/braidArrays';
import { toSpecialLowerCase } from '../../helpers/toSpecialLowerCase';
import { AbstractProductUpper, AbstractProductLower } from '../products'

export class ConcreteProductUpperNumberline implements AbstractProductUpper {
  collection: string = ')!@#$%^&*('

  public getUpper(): string {
    // The result of the product A2.
    return this.collection;
  }
}

export class ConcreteProductLowerNumberline implements AbstractProductLower {

  public getLower(collection: string): string {
    // The result of the product B2.
    return toSpecialLowerCase(collection);
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public mergeWithLower(collaborator: AbstractProductUpper): string {
    const collection = collaborator.getUpper()
    const lower = this.getLower(collection).split('')
    const upper = collection.split('')
    // The result of the B2 collaborating with the (${result})
    return braidArrays(upper, lower).join('');
  }
}