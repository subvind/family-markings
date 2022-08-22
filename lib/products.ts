
/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
export interface AbstractProductUpper {
  getUpper(): string;
}

/**
 * Here's the the base interface of another product. All products can interact
 * with each other, but proper interaction is possible only between products of
 * the same concrete variant.
 */
export interface AbstractProductLower {
  /**
   * Product B is able to do its own thing...
   */
  getLower(): string;

  /**
   * ...but it also can collaborate with the ProductA.
   *
   * The Abstract Factory makes sure that all products it creates are of the
   * same variant and thus, compatible.
   */
  margeWithLower(collaborator: AbstractProductUpper): string;
}
