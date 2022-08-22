import { braidArrays } from '../../helpers/braidArrays';
import { toSpecialLowerCase } from '../../helpers/toSpecialLowerCase';
import { AbstractProductUpper, AbstractProductLower } from '../products'

export class ConcreteProductUpperSymbolpath implements AbstractProductUpper {
  collection: string = '~_+{}|:"<>?'

  public getUpper(): string {
    // The result of the product A3
    return this.collection;
  }
}

export class ConcreteProductLowerSymbolpath implements AbstractProductLower {

  public getLower(collection: string): string {
    // The result of the product B3.
    return toSpecialLowerCase(collection);
  }

  public mergeWithLower(collaborator: AbstractProductUpper): string {
    const collection = collaborator.getUpper()
    const lower = this.getLower(collection).split('')
    const upper = collection.split('')
    // The result of the B3 collaborating with the (${result})
    return braidArrays(upper, lower).join('');
  }
}