import { AbstractProductA, AbstractProductB } from '../products'

/**
  * These Concrete Products are created by corresponding Concrete Factories.
  */
export class ConcreteProductA1 implements AbstractProductA {
  public usefulFunctionA(): string {
      return 'The result of the product A1.';
  }
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
export class ConcreteProductB1 implements AbstractProductB {

  public usefulFunctionB(): string {
      return 'The result of the product B1.';
  }

  /**
   * The variant, Product B1, is only able to work correctly with the variant,
   * Product A1. Nevertheless, it accepts any instance of AbstractProductA as
   * an argument.
   */
  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
      const result = collaborator.usefulFunctionA();
      return `The result of the B1 collaborating with the (${result})`;
  }
}