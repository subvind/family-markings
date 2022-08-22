import { braidArrays } from '../../helpers/braidArrays';
import { AbstractProductUpper, AbstractProductLower } from '../products'

export class ConcreteProductUpperSymbolpath implements AbstractProductUpper {
  public getUpper(): string {
    // The result of the product A3
    return '~_+{}|:"<>?';
  }
}

export class ConcreteProductLowerSymbolpath implements AbstractProductLower {

  public getLower(): string {
    // The result of the product B3.
    return "`-=[]\\;',./";
  }

  public margeWithLower(collaborator: AbstractProductUpper): string {
    const lower = this.getLower().split('')
    const upper = collaborator.getUpper().split('')
    // The result of the B3 collaborating with the (${result})
    return braidArrays(upper, lower).join('');
  }
}