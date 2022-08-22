import { AbstractProductUpper, AbstractProductLower } from '../products'

export class ConcreteProductUpperSymbolpath implements AbstractProductUpper {
  public usefulFunctionUpper(): string {
    // The result of the product A1
    return '~_+{}|:"<>?';
  }
}

export class ConcreteProductLowerSymbolpath implements AbstractProductLower {

  public usefulFunctionLower(): string {
    // The result of the product B1.
    return "`-=[]\\;',./";
  }

  public anotherUsefulFunctionLower(collaborator: AbstractProductUpper): string {
      const result = collaborator.usefulFunctionUpper();
      // The result of the B1 collaborating with the (${result})
      return result;
  }
}