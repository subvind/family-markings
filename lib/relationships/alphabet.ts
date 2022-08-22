import { AbstractProductUpper, AbstractProductLower } from '../products'

/**
  * These Concrete Products are created by corresponding Concrete Factories.
  */
export class ConcreteProductUpperAlphabet implements AbstractProductUpper {
  public usefulFunctionUpper(): string {
    // The result of the product A1
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductLowerAlphabet implements AbstractProductLower {

  public usefulFunctionLower(): string {
    // The result of the product B1.
    return 'abcdefghijklmnopqrstuvwxyz';
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionLower(collaborator: AbstractProductUpper): string {
      const result = collaborator.usefulFunctionUpper();
      // The result of the B1 collaborating with the (${result})
      return result;
  }
}