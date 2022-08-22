import { AbstractProductUpper, AbstractProductLower } from './products'

import { ConcreteProductUpperAlphabet, ConcreteProductLowerAlphabet } from './relationships/alphabet'
import { ConcreteProductUpperNumberline, ConcreteProductLowerNumberline } from './relationships/numberline'

/**
 * The Abstract Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
export interface AbstractFactory {
  createProductUpper(): AbstractProductUpper;

  createProductLower(): AbstractProductLower;
}

/**
* Concrete Factories produce a family of products that belong to a single
* variant. The factory guarantees that resulting products are compatible. Note
* that signatures of the Concrete Factory's methods return an abstract product,
* while inside the method a concrete product is instantiated.
*/
export class ConcreteFactoryAlphabet implements AbstractFactory {
  public createProductUpper(): AbstractProductUpper {
      return new ConcreteProductUpperAlphabet();
  }

  public createProductLower(): AbstractProductLower {
      return new ConcreteProductLowerAlphabet();
  }
}

/**
* Each Concrete Factory has a corresponding product variant.
*/
export class ConcreteFactoryNumberline implements AbstractFactory {
  public createProductUpper(): AbstractProductUpper {
      return new ConcreteProductUpperNumberline();
  }

  public createProductLower(): AbstractProductLower {
      return new ConcreteProductLowerNumberline();
  }
}
