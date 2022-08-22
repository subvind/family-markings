import { AbstractProductUpper, AbstractProductLower } from '../products'

export class ConcreteProductUpperNumberline implements AbstractProductUpper {
  public usefulFunctionUpper(): string {
      return 'The result of the product A2.';
  }
}

export class ConcreteProductLowerNumberline implements AbstractProductLower {

  public usefulFunctionLower(): string {
    return 'The result of the product B2.';
  }

  /**
   * The variant, Product B2, is only able to work correctly with the variant,
   * Product A2. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionLower(collaborator: AbstractProductUpper): string {
    const result = collaborator.usefulFunctionUpper();
    return `The result of the B2 collaborating with the (${result})`;
  }
}