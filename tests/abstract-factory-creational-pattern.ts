import { AbstractFactory, ConcreteFactoryAlphabet, ConcreteFactoryNumberline } from '../index'

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function demo(factory: AbstractFactory) {
  const productA = factory.createProductUpper();
  const productB = factory.createProductLower();

  console.log('lower:', productB.usefulFunctionLower());
  console.log('upper:', productB.anotherUsefulFunctionLower(productA));
}

function test() {
  /**
    * The client code can work with any concrete factory class.
    */
  console.log('DEMO: Testing first factory type...');
  demo(new ConcreteFactoryAlphabet());

  console.log('');

  console.log('DEMO: Testing second factory type...');
  demo(new ConcreteFactoryNumberline());
}

test();